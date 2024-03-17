"use server";

import { RegisterSchema } from "@/schema/index";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values);
    
    if (!validatedFields.success) {
        return { error: 'invalid fields' };
    }
    const { email, name, password } = validatedFields.data;
    const passwdHash = await bcrypt.hash(password, 10);
    const userExists = await getUserByEmail(email);
    if (userExists) {
        return { error: "email already exists" };
    }

    await db.user.create({
        data: {
            email,
            name,
            password: passwdHash,
        },
    });
    return { success: "user created" };
};
