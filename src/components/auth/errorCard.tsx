import { Card, CardFooter, CardHeader } from "@/components/ui/card" 
import { BackButton } from "@/components/auth/backButton";
import { Header } from "@/components/auth/header";
import { CardWrapper } from "@/components/auth/cardWrapper";
import { FaExclamationTriangle } from "react-icons/fa";

export const ErrorCard = () => {
    return (
        <CardWrapper headerLabel="something went wrong!" backButtonHref="/auth/login" backButtonLabel="back to login">
            <div className="w-full flex justify-center items-center">
            <FaExclamationTriangle className="text-desctructive" />
            </div>
        </CardWrapper>
    );
};