"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useEffect, useState } from "react";

export default function Page() {
  const { isAuthenticated } = useKindeBrowserClient(); // ✅ hook at top level

  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth =  () => {
      const result =  isAuthenticated; // ✅ this is a promise
      console.log(result);
      setIsAuth(result);
    };

    checkAuth();
  }, [isAuthenticated]); // include it as a dependency

  if (isAuth === null) return <p>Checking auth...</p>;

  return <div>{isAuth ? "Logged in" : "Not logged in"}</div>;
}
