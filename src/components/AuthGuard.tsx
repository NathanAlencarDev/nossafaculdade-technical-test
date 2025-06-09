"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {jwtDecode} from "jwt-decode";

type JwtPayload = {
    exp: number;
};

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
        router.push("/cms/login");
        return;
        }

        try {
        const decoded = jwtDecode<JwtPayload>(token);
        const now = Date.now().valueOf() / 1000;

        if (decoded.exp < now) {
            localStorage.removeItem("token");
            router.push("/cms/login");
        } else {
            setAuthorized(true);
        }
        } catch {
        localStorage.removeItem("token");
        router.push("/cms/login");
        }
    }, [router]);

    if (!authorized) {
        return <p>Verificando autenticação...</p>;
    }

    return <>{children}</>;
}
