"use server";

import { generateTwoFactorToken, generateVerificationToken } from "@/lib/token";
import { sendVerifMail, sendTwoFactorMail } from "@/lib/mail";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schema/index";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    
    if (!validatedFields.success) {
        return { error: 'invalid fields' };
    }

    const { email, password } = validatedFields.data;
    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: "Email does not exist!" }
      }
    
      if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email);
        
        await sendVerifMail(verificationToken.email, verificationToken.token);
        return { success: "email sent" };
      }

      if (existingUser.isTwoFactorEnabled && existingUser.email) {
        const twoFactorToken = await generateTwoFactorToken(existingUser.email);
        await sendTwoFactorMail(twoFactorToken.email, twoFactorToken.token);
        return { twoFactor: true }
      }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "invalid credentials" };
                default:
                    return { error: "unknown error" };
            }
        }
        throw error;
    }
};
