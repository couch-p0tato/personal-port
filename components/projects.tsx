"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { syne } from "@/lib/fonts";

const ProjectCard = ({ title, extra, category, year, link, index }: { title: string, extra?:string, category: string, year: string, link?: string, index: number }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative border-t border-neutral-800 py-12 cursor-pointer"
      onClick={() => link && window.open(link, '_blank', 'noopener,noreferrer')}
    >
      <div className="flex flex-col md:flex-row justify-between items-baseline z-10 relative mix-blend-difference">
        <h3 className={`${syne.className} text-5xl md:text-6xl lg:text-7xl font-bold uppercase transition-all duration-500 ${hovered ? 'translate-x-8' : ''}`}>
          {title} <span className="text-xs lg:text-sm">{extra}</span>
        </h3>
        
        <div className="flex gap-8 mt-4 md:mt-0 font-mono text-sm text-neutral-400">
          <span>{category}</span>
          <span>{year}</span>
        </div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div 
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            className="absolute inset-0 bg-[#d9f99d] origin-bottom z-0"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div 
        animate={{ rotate: hovered ? 45 : 0 }}
        className="absolute right-4 top-[40%] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black"
      >
        <ArrowUpRight size={48} />
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const projects = [
    { title: "Nextpolicy", category: "Fintech Lab", year: "2025", link: "https://www.nextpolicylab.com/" },
    { title: "Orbith", extra: "(still building)", category: "Web3 Identity", year: "2025" },
    { title: "Liberty", category: "Finance", year: "2025", link: "https://couch-p0tato.github.io/liberty-finance/" },
    { title: "Merit", category: "Consulting", year: "2024", link: "https://meritconsultingllc.org/" },
    { title: "Ade-Adeniji", category: "Portfolio", year: "2024", link: "https://couch-p0tato.github.io/portfolio3" }
  ];

  return (
    <Section className="bg-[#050505] text-[#e5e5e5]">
      <div className="flex justify-between items-end mb-20">
        <h2 className={`${syne.className} text-5xl md:text-6xl font-bold uppercase`}>Selected<br/>Works</h2>
        <span className="hidden md:block text-[#d9f99d] animate-pulse">● Live Deployments</span>
      </div>
      
      <div className="flex flex-col">
        {projects.map((proj, i) => (
          <ProjectCard key={i} index={i} {...proj} />
        ))}
      </div>
    </Section>
  );
};