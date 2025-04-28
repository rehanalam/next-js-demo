"use client";

import { ReactNode, useState } from "react";
import '../globals.css';

interface InterceptedRouteProps {
    children: ReactNode;
}

export default function InterceptedRouteLayout({children}: InterceptedRouteProps) {
    
    return <html>
        <body>
            <div className=" h-screen w-full">
                <h1>Intercepted Routes View</h1>
                {children}
            </div>
        </body>
    </html>
} 