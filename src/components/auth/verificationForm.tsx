"use client";

import { CardWrapper } from "@/components/auth/cardWrapper";
import { BeatLoader } from "react-spinners";

export const VerificationForm = () => {
    return (
        <CardWrapper headerLabel="confirmation your verif" backButtonLabel="back to login" backButtonHref="/auth/login">
            <div className="flex items-center w-full justify-center">
                <BeatLoader />
            </div>
        </CardWrapper>
    )
}