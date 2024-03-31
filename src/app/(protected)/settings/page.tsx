"use client";

import { useTransition } from "react";
import { useSession } from "next-auth/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { settings } from "@/actions/settings";

const SettingsPage = () => {
    const { update } = useSession();
    const [isPending, startTransition] = useTransition();
    const onClick = () => {
        startTransition(() => {
        settings({
            name: "new name",
            })
        });
    }
    return (
        <div className="flex justify-center items-center h-full">
        <div className="w-[600px]"> {/* Ajout de la classe w-[600px] pour définir la largeur du Card */}
            <Card>
            <CardHeader>
                <p className="text-2xl font-semibold text-center">Settings</p>
            </CardHeader>
            <CardContent>
                <Button disabled={isPending} onClick={onClick}>
                update name 
                </Button>
            </CardContent>
            </Card>
        </div>
        </div>
    )
}

export default SettingsPage;