import React from "react";
import { cn } from "@/lib/utils";

export const Section = ({ 
  children, 
  className = "",
  id = ""
}: { 
  children: React.ReactNode; 
  className?: string;
  id?: string;
}) => (
  <section id={id} className={cn("relative w-full px-4 md:px-12 py-24 overflow-hidden", className)}>
    {children}
  </section>
);