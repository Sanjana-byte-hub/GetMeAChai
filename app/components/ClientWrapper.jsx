"use client";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={`min-h-screen ${isHome ? "bg-cover bg-center" : ""}`}
      style={isHome ? { backgroundImage: "url('/chai.jpg')" } : {}}
    >
      {children}
    </div>
  );
}
