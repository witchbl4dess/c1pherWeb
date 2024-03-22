"use client";

import { NewVerification } from "@/actions/emailVerification";
import { CardWrapper } from "@/components/auth/cardWrapper";
import { useCallback, useEffect, useState } from "react";
import { FormSucces } from "@/components/form-succes";
import { FormError } from "@/components/form-error";
import { useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";

export const VerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const SearchParams = useSearchParams();
    const token = SearchParams.get("token");
    const onSubmit = useCallback(() => {
        if (success || error) return;
        if(!token) {
            setError("no token provided");
            return;
        }
        NewVerification(token)
            .then((data) => {
                setSuccess(data.success);
                setError(data.error);
            })
            .catch(() => {
                setError("something went wrong");
            })
    }, [token, success, error]);
    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <CardWrapper headerLabel="confirmation your verif" backButtonLabel="back to login" backButtonHref="/auth/login">
            <div className="flex items-center w-full justify-center">
                {!success && !error && (
                    <BeatLoader />
                )}
                <FormSucces message={success} />
                {!success && (
                    <FormError message={error} />
                )}
            </div>
        </CardWrapper>
    )
}