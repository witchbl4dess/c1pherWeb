"use server";

import { ResetSchema } from '@/schema/index';
import { getUserByEmail } from '@/data/user';
import * as z from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validatedFields = ResetSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "invalid email" };
    }

    const { email } = validatedFields.data;
    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
        return { error: "user not found" };
    }

    return { success: "reset email sent" };
}