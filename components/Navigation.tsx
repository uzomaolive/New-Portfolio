"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Navigation() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatted = now.toLocaleTimeString("en-NG", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setTime(formatted);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return ()=> clearInterval(interval);
    }, []);



        
}

    

