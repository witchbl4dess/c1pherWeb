"use server";

import { generateTwoFactorToken, generateVerificationToken } from "@/lib/token";
import { getTwoFactorConfirmationByUsedId } from "@/data/twoFactorConf";
import { getTwoFactorTokenByMail } from "@/data/twoFactorToken";
import { sendVerifMail, sendTwoFactorMail } from "@/lib/mail";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schema/index";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { db } from "@/lib/db";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);
    
    if (!validatedFields.success) {
        return { error: 'invalid fields' };
    }

    const { email, password, code } = validatedFields.data;
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
        if (code) {
            const twoFactorToken = await getTwoFactorTokenByMail(existingUser.email);
            if (!twoFactorToken) {
                return { error: "invalid code" };
            }
            if (twoFactorToken.token !== code) {
                return { error: "invalid code" };
            }
            const hasExpired = new Date(twoFactorToken.expires) < new Date();
            if (hasExpired) {
                return { error: "code expired" };
            }
            await db.twoFactorToken.delete({
                where: { id: twoFactorToken.id }
            })
            const existingConfirmation = await getTwoFactorConfirmationByUsedId(existingUser.id);
            if (existingConfirmation) {
                await db.twoFactorConfirmation.delete({
                    where: { id: existingConfirmation.id }
                })
            }
            await db.twoFactorConfirmation.create({
                data: {
                    userId: existingUser.id,
                }
            });
        } else {
            const twoFactorToken = await generateTwoFactorToken(existingUser.email);
            await sendTwoFactorMail(twoFactorToken.email, twoFactorToken.token);
            return { twoFactor: true }
        }
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
