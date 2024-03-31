"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { SettingsSchema } from "@/schema";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
    const user = await currentUser();
    if (!user) {
        return { error: "Unauthorized" };
    }
    const existingUser = await getUserById(user.id!);
    if (!existingUser) {
        return { error: "Unauthorized" };
    }

    await db.user.update({ where: { id: existingUser.id }, data: { ...values,}});
    return { succes: "settings updated" };
}