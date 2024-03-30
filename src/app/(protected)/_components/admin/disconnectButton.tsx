"use client";

import { logout } from "@/actions/logout";
import { signOut } from "next-auth/react";

interface DisconnectButtonProps {
    children?: React.ReactNode;
};

export const DisconnectButton = ({ children }: DisconnectButtonProps) => {
    const onClick = () => {
        logout();        
    }
    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};