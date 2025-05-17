"use client"
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaVk } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-4 mb-20">
      <p className="text-xl text-gray-300">© 2024. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <FaTelegram />
        <FaGithub />
        <MdEmail />
        <FaVk />
      </div>
    </footer>
  );
}
