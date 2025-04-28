"use client";

import { ReactNode, useState } from "react"

interface DashboardLayoutProps {
    children: ReactNode;
    map: ReactNode;
    user: ReactNode;
    todo: ReactNode;
    login: ReactNode;
}

export default function DashboardLayout({children, map, user, todo, login}: DashboardLayoutProps) {
    const [isLoggedin, setLoggedin ] = useState(false);
    
    return <div className=" h-screen w-full">
        {
            isLoggedin ? <div>
                <div>{children}</div>
                <div className="flex w-full">
                    <div className="flex flex-col w-full">
                        <div>{map}</div>
                        <div className="flex w-full">
                            <div className="w-full">{user}</div>
                            <div className="w-full">{todo}</div>
                        </div>
                    </div>
                </div>
            </div> :
            <div className="h-[200px] border border-gray-400">
                {login}
                <button onClick={() => setLoggedin(true)}>Login</button>
            </div>
        }
    </div>
} 