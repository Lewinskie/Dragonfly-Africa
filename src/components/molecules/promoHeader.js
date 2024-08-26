import Link from "next/link";
import { AgentIcon } from "../icons";
import { ClientIcon } from "../icons";

function PromoHeader({}) {
  return (
    <div className="bg-primary-500  z-[999] gap-5 ">
      <div className="mx-auto max-w-7xl  text-center font-serif flex flex-row justify-end gap-10 items-center text-base h-10 text-white">
        <div className="">
          <Link href="/">
            <AgentIcon />
          </Link>
          <span className="hidden md:inline px-2 text-base">Agent Login</span>
        </div>
        <div className="">
          <Link href="/">
            <ClientIcon />
          </Link>
          <span className="hidden md:inline px-2 text-base">
            Customer Login
          </span>
        </div>
      </div>
    </div>
  );
}

export default PromoHeader;
