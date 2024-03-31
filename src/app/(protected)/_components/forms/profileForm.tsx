"use client";

import { settings } from "@/actions/settings";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { SettingsSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { startTransition, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "@/components/form-error";
import { FormSucces } from "@/components/form-succes";
import { z } from "zod";
import { UserRole } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Props = {};

const ProfileForm = (props: Props) => {
    const [isLoading, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>();
    const [succes, setSucces] = useState<string | undefined>();
    const { update } = useSession();
    const user = useCurrentUser();
    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
          password: undefined,
          newPassword: undefined,
          name: user?.name || undefined,
          email: user?.email || undefined,
          role: user?.role || undefined,
          isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
        }
      });
      const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
        startTransition(() => {
          settings(values)
            .then((data) => {
              if (data.error) {
                setError(data.error);
              }
    
              if (data.success) {
                update();
                setSucces(data.success);
              }
            })
            .catch(() => setError("Something went wrong!"));
        });
      }
    return (
        <Form {...form}>
            <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg">User full name</FormLabel>
                        <FormControl>
                        <Input
                            {...field}
                            placeholder="Name"
                        />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    disabled={isLoading || true}
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg">Rank</FormLabel>
                        <Select disabled={isLoading || true} onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a rank" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value={UserRole.ADMIN}>
                                Admin
                            </SelectItem>
                            <SelectItem value={UserRole.USER}>
                                User
                            </SelectItem>
                        </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="isTwoFactorEnabled"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="text-lg">Two Factor</FormLabel>
                        <FormDescription>Eable two factor authentification to your account</FormDescription>
                        <FormControl>
                        <Switch
                          disabled={isLoading}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />                        
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <Button type="submit" className="self-start hover:bg-[#2F006B] hover:text-white">
                    {isLoading ? (
                        <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving
                        </>
                    ) : (
                        'Save User Settings'
                    )}
                </Button>
            </form>
        </Form>
    )
}

export default ProfileForm;