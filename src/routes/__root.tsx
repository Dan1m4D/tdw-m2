import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const RootLayout = () => {
    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") ?? "dark"
    );

    const handleToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document
            .querySelector("html")
            ?.setAttribute("data-theme", localTheme || "dark");
    }, [theme]);

    return (
        <main className="bg-base-100 text-base-content min-h-screen">
            <label className="swap swap-rotate absolute top-4 right-4">
                <input
                    type="checkbox"
                    className="theme-controller"
                    checked={theme === "dark"}
                    onChange={handleToggle}
                />
                <FaSun className="swap-on w-8 h-8 m-4" />
                <FaMoon className="swap-off w-8 h-8 m-4" />
            </label>
            <Outlet />
            <TanStackRouterDevtools />
        </main>
    );
};
export const Route = createRootRoute({ component: RootLayout });
