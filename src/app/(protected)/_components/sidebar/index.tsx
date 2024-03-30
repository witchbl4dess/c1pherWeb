"use client";

import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { Separator } from "@/components/ui/separator";
import { menuOptions  } from "@/lib/constant";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

type Props = {}

const DashOptions = (props: Props) => {
    const pathName = usePathname();
    return (
        <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2">
            <div className="flex items-center justify-center flex-col gap-8">
                <Link className="flex font-bold flex-row" href="/">
                    c1pher.
                </Link>
                <TooltipProvider>
                    {menuOptions.map((menuItem) => (
                        <ul key={menuItem.name}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link href={menuItem.href} className={clsx("group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer", {
                                            "dark:bg-[#2F006B] bg-[#EEE0FF] ":
                                            pathName == menuItem.href,
                                            }
                                        )}
                                        >
                                            <menuItem.Component selected={pathName === menuItem.href} />
                                        </Link>
                                    </li>
                                </TooltipTrigger>
                                <TooltipContent side="right" className="bg-black/10 backdrop-blur-xl">
                                    <p>{menuItem.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </ul>
                    ))}
                </TooltipProvider>
                <Separator />
            </div>
        </nav>
    )
}

export default DashOptions;