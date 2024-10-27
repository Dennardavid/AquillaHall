"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { PiExam } from "react-icons/pi";
import { MdRecordVoiceOver } from "react-icons/md";
import { GrScorecard } from "react-icons/gr";
import { usePathname } from "next/navigation"; // Import usePathname hook

export default function Navigation() {
  const pathname = usePathname();
  const navLinks = [
    {
      href: "/dashboard",
      label: "Dashboard",
      Icon: <FaHome color="white" fontSize={25} />,
    },
    {
      href: "/dashboard/results",
      label: "Check Results",
      Icon: <GrScorecard color="white" fontSize={25} />,
    },
    {
      href: "/dashboard/complaints",
      label: "Log a Complaint",
      Icon: <MdRecordVoiceOver color="white" fontSize={25} />,
    },
    {
      href: "/dashboard/exams",
      label: "Take Online Exams",
      Icon: <PiExam color="white" fontSize={25} />,
    },
  ];

  return (
    <nav className="bg-VeryDarkBlue w-[20%] h-dvh rounded-r-xl flex flex-col justify-between">
      <div className="p-4">
        <h1 className="text-white text-2xl mt-4 mb-8 font-extrabold">
          Aquilla Hall
        </h1>

        <ul className="space-y-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href; // Compare the pathname with the link href

            return (
              <li
                key={link.href}
                className={`flex items-center gap-1 ${
                  isActive ? "bg-cyan rounded-lg p-2" : ""
                }`} // Apply active styles conditionally
              >
                {link.Icon}
                <Link
                  href={link.href}
                  className={`text-white ${
                    isActive ? "font-bold text-cyan" : ""
                  }`} // Apply active link styling
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <form
        action="../auth/signout"
        method="POST"
        className="flex items-center p-4"
      >
        <button
          type="submit"
          className="w-full text-white bg-red-500 hover:bg-red-700 rounded-lg py-2 transition"
        >
          Logout
        </button>
      </form>
     
    </nav>
  );
}
