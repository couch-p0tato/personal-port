"use client";

import React, { useEffect, useState } from "react";
import { Github, Twitter, Mail, Globe } from "lucide-react";
import { syne } from "@/lib/fonts";

export const Footer = () => {
  const [time, setTime] = useState<string>("");

  const year = new Date().getFullYear();

  useEffect(() => {
    // Set initial time
    setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Lagos' }));
    
    // Update every minute
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Lagos' }));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#d9f99d] text-[#050505] pt-24 pb-12 px-4 md:px-12 overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 relative z-10">
        <div>
          <h2 className={`${syne.className} text-7xl md:text-9xl font-extrabold uppercase leading-none tracking-tighter mb-8`}>
            Let's<br/>Talk
          </h2>
        </div>
        <div className="flex flex-col justify-end items-start md:items-end gap-6">
          <a href="mailto:moyoadeniji401@gmail.com" className="flex items-center gap-1.5 md:gap-3 text-xl md:text-2xl font-bold hover:underline decoration-2 underline-offset-4">
            moyoadeniji401@gmail.com <Mail />
          </a>
          <div className="flex gap-4">
            <button onClick={() => window.open('https://x.com/__moy0', '_blank', 'noopener,noreferrer')} className="p-4 border-2 border-black rounded-full hover:bg-black hover:text-[#d9f99d] transition-colors cursor-pointer"><Twitter /></button>
            <button onClick={() => window.open('https://github.com/couch-p0tato', '_blank', 'noopener,noreferrer')} className="p-4 border-2 border-black rounded-full hover:bg-black hover:text-[#d9f99d] transition-colors cursor-pointer"><Github /></button>
            <button className="p-4 border-2 border-black rounded-full hover:bg-black hover:text-[#d9f99d] transition-colors cursor-pointer"><Globe /></button>
            {/* onClick={() => window.open('link', '_blank')} */}
          </div>
        </div>
      </div>

      <div className="border-t-2 border-black pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-bold uppercase tracking-widest">
        <span>© {year} Moyo Adeniji</span>
        <span>Time for me: {time}</span>
      </div>
      
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-white/20 to-transparent pointer-events-none mix-blend-soft-light" />
    </footer>
  );
};