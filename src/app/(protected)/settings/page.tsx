"use client";

import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { settings } from "@/actions/settings";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SettingsSchema } from "@/schema";
import { Form, FormField, FormItem, FormLabel, FormDescription, FormMessage, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { FormSucces } from "@/components/form-succes";
import { FormError } from "@/components/form-error";

const SettingsPage = () => {
    const user = useCurrentUser()
    const [ error, setError ] = useState<string | undefined>();
    const [ succes, setSucces ] = useState<string | undefined>();
    const { update } = useSession();
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof SettingsSchema>>({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            name: user?.name || undefined,
        }
    })
    const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
        startTransition(() => {
          settings(values)
            .then((data) => {
              if (data.error) {
                setError(data.error);
              }
    
              if (data.succes) {
                update();
                setSucces(data.succes);
              }
            })
            .catch(() => setError("Something went wrong!"));
        });
      }
    return (
                <Card className="w-[600px]">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                ⚙️ Settings
                </p>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                <form 
                    className="space-y-6" 
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="space-y-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                            <Input
                                {...field}
                                placeholder="John Doe"
                                disabled={isPending}
                            />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                        
                        </div>
                        <FormError message={error} />
                        <FormSucces message={succes} />
                        <Button type="submit" disabled={isPending}>
                            Save
                        </Button>
                    </form>
                </Form>
            </CardContent>
            </Card>
        </div>
        </div>
    )
}

export default SettingsPage;