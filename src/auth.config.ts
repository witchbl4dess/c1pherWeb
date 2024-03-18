import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schema";
import bcrypt from "bcryptjs";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;
                    const user = await getUserByEmail(email);

                    if (!user || !user.password) return null;
                    const passwdMatch = await bcrypt.compare(password, user.password);

                    if (passwdMatch) return user;
                }
                return null;
            }
        })
    ],
} satisfies NextAuthConfig;