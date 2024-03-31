"use client";

import { FormError } from "@/components/form-error";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";

interface RoleGateProps {
    allowedRole: UserRole;
    children: React.ReactNode;
}

export const RoleGate = ({ allowedRole, children }: RoleGateProps) => {
    const role = useCurrentRole();
    if (role !== allowedRole) {
        return (
            <FormError message="you don't have enought permissions to view this page" />
        )
    }

    return (
        <>
        {children}
        </>
    )
}