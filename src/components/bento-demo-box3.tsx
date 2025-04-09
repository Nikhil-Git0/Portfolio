"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { PencilRulerIcon } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const featureBox3 = {
  Icon: PencilRulerIcon,
  name: "Projects",
  description: "Explore my latest projects and works.",
  href: "#",
  cta: "View Projects",
  background: <div className="absolute inset-0 bg-gradient-to-br" />,
  className: "col-span-3 row-span-3",
};

const FullScreenCard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={cn(
          "relative bg-white w-[95vw] h-[90vh] p-8 flex flex-col gap-8 max-w-[1920px] max-h-max rounded-[32px] overflow-y-auto border-2 border-[#09A7A7] scrollbar-none",
          "md:p-12",
          "max-md:w-[95vw] max-md:h-[95vh] max-md:p-4 max-md:gap-4",
          "bg-background/80 backdrop-blur-sm animate-in zoom-in-95 duration-300"
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#09A7A7] hover:bg-[#077b7b] text-white transition-colors"
          aria-label="Close"
        >
          <Cross2Icon className="h-5 w-5" />
        </button>
        <div className="space-y-4">
          <SparklesText
            text="My Projects"
            colors={{ first: "#09A7A7", second: "#06b6b6" }}
            className="text-3xl font-bold mb-6 text-white dark:text-white"
          />
          <p className="text-gray-700 dark:text-gray-300">Updating...</p>
          {/* <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Project 1: A responsive web app built with React and Tailwind CSS.</li>
            <li>Project 2: A full-stack application using Next.js and MongoDB.</li>
            <li>Project 3: A creative portfolio with advanced animations.</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300">
            All projects are crafted with attention to detail and modern technologies.
          </p> */}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default function BentoDemoBox3() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleViewProjects = () => {
    setIsCardOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsCardOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <BentoGrid className="grid-rows-3 grid-cols-3 h-full w-full">
        <BentoCard
          {...featureBox3}
          cta={
            <Button
              variant="ghost"
              size="sm"
              className="text-white pointer-events-auto"
              onClick={handleViewProjects}
            >
              {featureBox3.cta}
              <ArrowRightIcon className="ms-2 h-4 w-4" />
            </Button>
          }
        />
      </BentoGrid>
      {isCardOpen && <FullScreenCard onClose={handleClose} />}
    </>
  );
}