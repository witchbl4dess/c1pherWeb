"use client";

import { ModeToggle } from "@/components/global/toggle-mode";
import { Book, Search, Headphones } from "lucide-react";
import { FaDiscord, FaBook } from "react-icons/fa";
import React, { useEffect } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { UserButton } from "../admin/userButton";
import { Input } from "@/components/ui/input";

type Props = {};

const InfoBar = (props: Props) => {
    return (
        <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black">
            <span className="flex items-center rounded-full bg-muted px-4">
            <Search />
        <Input
          placeholder="Quick Search"
          className="border-none bg-transparent"
        />
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <FaDiscord />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <FaBook />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UserButton />
        </div>
    )
}

export default InfoBar;