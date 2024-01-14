import React from "react";
import { HEADER_MENUS } from "./MENU.conficts";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex h-14 py-1.5 justify-between items-center">
      <div>ZUKA SALON</div>
      <ul className="flex items-center gap-7.5">
        {HEADER_MENUS.map((el) => (
          <li key={el.href}>
            <Link className="text-dark-300 font-semibold" href={el.href}>
              {el.label}
            </Link>
          </li>
        ))}
      </ul>
      <Button
        variant="outline"
        className="text-primary px-3 rounded-lg border-primary hover:bg-primary hover:bg-light h-6 py-0.5"
      >
        Đăng nhập
      </Button>
    </div>
  );
}
