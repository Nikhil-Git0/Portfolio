// import type React from "react";
// import { ArrowRightIcon } from "@radix-ui/react-icons";
// import type { ComponentPropsWithoutRef, ReactNode } from "react";

// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
//   children: ReactNode;
//   className?: string;
// }

// interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
//   name: string;
//   className: string;
//   background: ReactNode;
//   Icon: React.ElementType;
//   description: string;
//   href: string;
//   cta: string;
// }

// const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
//   return (
//     <div className={cn("grid w-full auto-rows-[23rem] grid-cols-3 gap-4", className)} {...props}>
//       {children}
//     </div>
//   );
// };

// const BentoCard = ({ name, className, background, Icon, description, href, cta, ...props }: BentoCardProps) => (
//   <div
//     key={name}
//     className={cn(
//       "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl backdrop-blur-sm bg-white/10 transition-all",
//       // Remove background and blur on hover
//       "hover:bg-transparent hover:backdrop-blur-none",
//       // light styles
//       "[box-shadow:0_0_0_1px_rgba(255,255,255,.1),0_2px_4px_rgba(255,255,255,.05),0_12px_24px_rgba(255,255,255,.05)]",
//       // dark styles
//       "transform-gpu dark:bg-white/10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
//       className,
//     )}
//     {...props}
//   >
//     <div>{background}</div>
//     <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-5 transition-all duration-300 group-hover:-translate-y-10">
//       {/* Icon and Name */}
//       <div>
//         <Icon className="h-9 w-9 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
//         <h3 className="text-xl font-semibold text-white">{name}</h3>
//       </div>
//       {/* Description - Hidden on hover */}
//       <p className="max-w-lg text-sm text-white/80 transition-all duration-300 group-hover:opacity-0">
//         {description}
//       </p>
//     </div>

//     <div
//       className={cn(
//         "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
//       )}
//     >
//       <Button variant="ghost" asChild size="sm" className="pointer-events-auto text-white">
//         <a href={href}>
//           {cta}
//           <ArrowRightIcon className="ms-2 h-4 w-4" />
//         </a>
//       </Button>
//     </div>
//     <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[.03]" />
//   </div>
// );

// export { BentoCard, BentoGrid };


import type React from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string | ReactNode;
  onClick?: () => void;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full auto-rows-[23rem] grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  onClick,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl backdrop-blur-sm transition-all",
      "[box-shadow:0_0_0_1px_rgba(255,255,255,.1),0_2px_4px_rgba(255,255,255,.05),0_12px_24px_rgba(255,255,255,.05)]",
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-5 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-9 w-9 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="max-w-lg text-sm text-white/80">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      {typeof cta === "string" ? (
        <Button
          variant="ghost"
          asChild={!!href && !onClick}
          size="sm"
          className="pointer-events-auto text-white"
          onClick={onClick}
        >
          {href && !onClick ? (
            <a href={href}>
              {cta}
              <ArrowRightIcon className="ms-2 h-4 w-4" />
            </a>
          ) : (
            <>
              {cta}
              <ArrowRightIcon className="ms-2 h-4 w-4" />
            </>
          )}
        </Button>
      ) : (
        cta // Render custom component if provided
      )}
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[.03]" />
  </div>
);

export { BentoCard, BentoGrid };