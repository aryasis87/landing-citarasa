"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-soot text-cream py-4"
    >
      <div className="container text-cream/75 mx-auto px-6 text-sm md:text-base text-center">
        <p>© {new Date().getFullYear()} Citarasa. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
