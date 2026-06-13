// components/Sidebar.tsx
"use client";

import { Book, Home, Sun, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = [
  {
    icon: <Home/>,
    pathname: '/'
  },
  {
    icon: <Book/>,
    pathname: '/orders'
  },
]
const NavBottomLinks = [
  {
    icon: <Sun/>,
    pathname: '/'
  },
  {
    icon: <User/>,
    pathname: '/login'
  },
]

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex px-7 bg-white flex-col border rounded-r-md">
      <nav className="flex-1 pt-6 space-y-3">
          {NavLinks.map((item, i) => (
            <Link
            key={i}
            href={item.pathname}
            className={`flex items-center p-5 rounded-3xl text-sm font-medium transition-colors
              ${pathname === item.pathname
                ? "bg-primary text-white"
                : "text-gray-600 hover:bg-primary-foreground hover:text-primary"
              }`}
          >{item.icon}</Link>
          ))}
      </nav>
      <div className="my-3 w-px h-full bg-primary mx-auto"></div>
      <div className="pb-6 flex-1 space-y-3">
        {NavBottomLinks.map((item, i) => (
            <Link
            key={i}
            href={item.pathname}
            className={`flex items-center p-5 rounded-3xl text-sm font-medium transition-colors text-gray-600 hover:bg-primary-foreground hover:text-primary`}
          >{item.icon}</Link>
          ))}
      </div>
    </aside>
  );
}