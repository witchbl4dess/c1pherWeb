"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CardWrapper } from '@/components/auth/cardWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSucces } from '@/components/form-succes';
import { FormError } from '@/components/form-error';
import { NewPasswordSchema } from '@/schema/index';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { newPassword } from '@/actions/newPassword';
import { useTransition } from 'react';
import { useState } from 'react';
import * as z from "zod";
import Link from 'next/link';

export const ResetPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [error, setError] = useState<string | undefined>("");
    const [succes, setSucces] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof NewPasswordSchema>>({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: '',
        },
    });
    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError("");
        setSucces("");
        
        startTransition(() => {
            newPassword(values, token)
            .then((data) => {
                setError(data?.error);
                setSucces(data?.success);
            })
        });
    }
    
    return (
        <CardWrapper headerLabel="forgot your password" backButtonLabel="back to login" backButtonHref="/auth/login">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField control={form.control} name="password" render={({ field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="******" type="password" disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <FormError message={error} />
                    <FormSucces message={succes} />
                    <Button type="submit" className="w-full" disabled={isPending}>
                        reset password
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};