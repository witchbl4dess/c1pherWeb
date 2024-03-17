"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { CardWrapper } from '@/components/auth/cardWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSucces } from '@/components/form-succes';
import { FormError } from '@/components/form-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RegisterSchema } from '@/schema/index';
import { useForm } from 'react-hook-form';
import { register } from '@/actions/register';
import { useTransition } from 'react';
import { useState } from 'react';
import * as z from "zod";

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [succes, setSucces] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
            name: ''
        },
    });
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSucces("");
        
        startTransition(() => {
            register(values)
            .then((data) => {
                setError(data.error);
                setSucces(data.success);
            })
        });
    }
    
    return (
        <CardWrapper headerLabel="create an account" backButtonLabel="already have an account" backButtonHref="/auth/login" showSocial>
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
                        <FormField control={form.control} name="name" render={({ field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="jon doe" disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    <FormError message={error} />
                    <FormSucces message={succes} />
                    <Button type="submit" className="w-full" disabled={isPending}>
                        create an account
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};