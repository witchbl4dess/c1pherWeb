import React from "react";
import Image from "next/image";
import icon from "@/assets/iconc1.png"

type Props = {}

const Navbar = async (props: Props) => {
    return (
        <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
            <aside className="flex items-center gap-[2px]">
                <p className="text-3xl font-bold">C1</p>
                <Image src={icon} width={15} height={15} alt="c1pherlogo" className="shadow-sm"/>
                <p className="text-3xl font-bold">pher</p>
            </aside>
        </header>
    )
}

export default Navbar;