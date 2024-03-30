"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUserAstronaut, FaLongArrowAltDown } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { DisconnectButton } from "./disconnectButton";

export const UserButton = () => {
    const user = useCurrentUser();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={user?.image || ""} />
                    <AvatarFallback>
                        <FaUserAstronaut />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DisconnectButton>
                    <DropdownMenuItem>
                        <FaLongArrowAltDown className="h-4 w-4 mr-2 "/>
                        Logout
                    </DropdownMenuItem>
                </DisconnectButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}