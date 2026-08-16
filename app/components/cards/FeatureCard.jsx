// components/cards/FeatureCard.jsx
"use client";
import { motion } from "framer-motion";
import { fadeIn, hoverEffect } from "../animations/animations";

export default function FeatureCard({ title, description }) {
  return (
    <motion.div
      variants={fadeIn}
      whileHover="hover"
      className="p-8 shadow-md rounded-lg bg-cream border border-soot/12"
    >
      <h3 className="text-2xl font-bold text-enamel mb-4">{title}</h3>
      <p className="text-soot-soft">{description}</p>
    </motion.div>
  );
}
