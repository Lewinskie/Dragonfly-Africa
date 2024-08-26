import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavTitles } from "../../data";

function SideNavLinkList({ sticky, onClosemenu }) {
  const router = useRouter();
  const handleLinkClick = () => {
    onClosemenu();
  };
  return (
    <div className="flex flex-col ">
      <div>
        <ul className="flex h-[40vh] flex-col justify-center gap-6 py-2 text-lg">
          {NavTitles?.map((menu, i) => (
            <Link
              key={i}
              href={menu?.href}
              className={`${
                router.asPath == menu.href
                  ? " px-8 text-accent"
                  : "px-4 text-primary hover:text-accent"
              }`}
              onClick={handleLinkClick}
            >
              {menu?.name}
            </Link>
          ))}
        </ul>
      </div>
      {/* <div>
        <h2>Contact Use</h2>
      </div> */}
    </div>
  );
}

export default SideNavLinkList;
