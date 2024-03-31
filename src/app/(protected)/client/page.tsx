import { auth } from "@/auth";
import { currentUser } from "@/hooks/auth";
import { UserInfo } from "../_components/admin/userInfo";

const ClientPage = async () => {
    const user = await currentUser();
    return (
        <div className="flex justify-center items-center h-full">
            <div>
                <UserInfo label="client info" user={user} />
            </div>
        </div>
    );
}

export default ClientPage;