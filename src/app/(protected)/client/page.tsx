"use client";

import { currentUser } from "@/hooks/auth";
import { UserInfo } from "../_components/admin/userInfo";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const ClientPage = () => {
    const user = useCurrentUser();
    return (
        <div className="flex justify-center items-center h-full">
            <div>
                <UserInfo label="client info" user={user} />
            </div>
        </div>
    );
}

export default ClientPage;