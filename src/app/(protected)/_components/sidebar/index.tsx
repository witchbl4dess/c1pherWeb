import Link from "next/link";
import React from "react";

type Props = {}

const DashOptions = (props: Props) => {
    return (
        <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2">
            <div className="flex items-center justify-center flex-col gap-8">
                <Link className="flex font-bold flex-row" href="/">
                    c1pher.
                </Link>
            </div>
        </nav>
    )
}

export default DashOptions;