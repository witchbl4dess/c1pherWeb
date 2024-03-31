"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RoleGate } from "../_components/admin/roleGate";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { FormSucces } from "@/components/form-succes";
import { Button } from "@/components/ui/button";
import { UserRole } from "@prisma/client";
import { currentRole } from "@/lib/auth";
import { admin } from "@/actions/admin";
import { toast } from "sonner";

const AdminPage = () => {
    const onServerActionClick = () => {
        admin()
          .then((data) => {
            if (data.error) {
              toast.error(data.error);
            }
    
            if (data.success) {
              toast.success(data.success);
            }
          })
      }
      
      const onApiRouteClick = () => {
        fetch("/api/admin")
          .then((response) => {
            if (response.ok) {
              toast.success("Allowed API Route!");
            } else {
              toast.error("Forbidden API Route!");
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
                        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
                        <p className="text-sm font-medium">
                            Admin-only Server Action
                        </p>
                            <Button onClick={onServerActionClick}>
                            Click to test
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminPage;