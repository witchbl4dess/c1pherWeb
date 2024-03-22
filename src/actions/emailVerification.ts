"use server";

import { getVerificationTokenByToken } from "@/data/verifToken";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const NewVerification = async (token: string) => {
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken) {
        return { error: "token does not exist" };
    }
    
    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
        return { error: "token has expired" };
    }
    
    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) {
        return { error: "user does not exist" };
    }

    await db.user.update({
        where: { id: existingUser.id},
        data: {
            emailVerified: new Date(),
            email: existingToken.email
        }
    });

    await db.verificationToken.delete({
        where: { id: existingToken.id}
    });

    return { success: "email verified successfully" }
}