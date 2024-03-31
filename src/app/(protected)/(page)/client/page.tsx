"use client";

import { currentUser } from "@/hooks/auth";
import { UserInfo } from "../../_components/admin/userInfo";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const ClientPage = () => {
    const user = useCurrentUser();
    return (
        <div className="flex flex-col gap-4 relative">
            <h1 className="text-4xl sticky top-0 z-10 p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
                Client
            </h1>
            <div className="flex justify-center items-center h-full">
                <div>
                <UserInfo label="client info" user={user} />
                </div>
            </div>
     </div>
    );
}

export default ClientPage;