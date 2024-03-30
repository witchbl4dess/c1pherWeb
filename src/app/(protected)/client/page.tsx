import { auth } from "@/auth";

const ClientPage = async () => {
    const session = await auth();
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    );
}

export default ClientPage;