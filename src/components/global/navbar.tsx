import React from "react";
import Image from "next/image";
import icon from "@/assets/iconc1.png"
import Link from "next/link";

type Props = {}

const Navbar = async (props: Props) => {
    return (
        <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
            <aside className="flex items-center gap-[2px]">
                <p className="text-3xl font-bold">c1pher.</p>
            </aside>
            <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
                <ul className="flex items-center gap-4 list-none">
                    <li><Link href="#">Presention</Link></li>
                    <li><Link href="#">Download</Link></li>
                    <li><Link href="#">Documentation</Link></li>
                    <li><Link href="#">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;