import { auth } from "@/auth";

export const UserInfo = async () => {
    const session = await auth();
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    );
};