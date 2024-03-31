"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { currentRole } from "@/lib/auth";
import { RoleGate } from "../_components/admin/roleGate";
import { FormSucces } from "@/components/form-succes";
import { UserRole } from "@prisma/client";
import { Button } from "@/components/ui/button";

const AdminPage = () => {
    const onApiRouteClick = () => {
        fetch("/api/admin")
        .then((response) => {
            if (response.ok) {
                console.log("success");
            } else {
                console.log("error");
            }
        })
    }
    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-[600px]">
                <Card>
                <CardHeader>
                    <p className="text-2xl font-semibold text-center">Admin</p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <RoleGate allowedRole={UserRole.ADMIN}>
                    <FormSucces message="you are allowed" />
                    </RoleGate>
                    <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                        <p className="text-sm font-medium">
                            Admin-Only API Route
                        </p>
                        <Button onClick={onApiRouteClick}>
                            click
                        </Button>
                    </div>
                </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminPage;