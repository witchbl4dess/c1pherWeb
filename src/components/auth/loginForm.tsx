"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CardWrapper } from '@/components/auth/cardWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSucces } from '@/components/form-succes';
import { FormError } from '@/components/form-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoginSchema } from '@/schema/index';
import { useForm } from 'react-hook-form';
import { login } from '@/actions/login';
import { useTransition } from 'react';
import { useState } from 'react';
import * as z from "zod";

export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [succes, setSucces] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSucces("");
        
        startTransition(() => {
            login(values)
            .then((data) => {
                setError(data.error);
                setSucces(data.success);
            })
        });
    }
    
    return (
        <CardWrapper headerLabel="welcome back" backButtonLabel="don't have an acc?" backButtonHref="/auth/register" showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField control={form.control} name="email" render={({ field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="john.doe@xyz.com" type="email" disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="password" render={({ field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="*****" type="password" disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <FormError message={error} />
                    <FormSucces message={succes} />
                    <Button type="submit" className="w-full" disabled={isPending}>
                        login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};