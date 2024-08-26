import React from "react";
// import NavLink from "../atom/navLink";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavTitles } from "../../data";

function NavLinkList({ sticky }) {
  const router = useRouter();

  return (
    <div className="px-5">
      <ul className="hidden gap-6 md:flex md:flex-row ">
        {NavTitles &&
          NavTitles.map((NavTitle) => {
            return (
              <div key={NavTitle.id} className="menu-item">
                <Link
                  href={NavTitle.href}
                  className={`${
                    router.asPath == NavTitle.href
                      ? `${sticky ? "text-primary " : "text-primary-500"}`
                      : sticky
                      ? "text-gray-500"
                      : "text-white-500"
                  } text-base font-sans hover:text-secondary-500`}
                >
                  {NavTitle.name}
                </Link>
                {NavTitle?.sub_menu && NavTitle.sub_menu.length > 0 && (
                  <ul className="dropdown-menu pt-3">
                    {NavTitle?.sub_menu &&
                      NavTitle.sub_menu.length > 0 &&
                      NavTitle.sub_menu.map((item) => (
                        <li key={item.id} className="dropdown-menu-item">
                          <Link href="/fromceo">{item.sub_name}</Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default NavLinkList;
