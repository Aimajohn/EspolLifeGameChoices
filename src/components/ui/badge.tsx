import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 capitalize relative",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        money:
          "rounded-full bg-yellow-400/95 text-slate-950 text-sm border-none py-1 px-3",
        social:
          "rounded-full bg-purple-600/95 text-slate-100 text-sm border-none py-1 px-3",
        energia:
          "rounded-full bg-green-500/95 text-slate-950 text-sm border-none py-1 px-3",
        conocimiento:
          "rounded-full bg-orange-400/95 text-slate-950 text-sm border-none py-1 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  puntos: number
  children: string
}

function Badge({ className, children, variant, puntos, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <span className="-ml-[.65rem] mr-2 block size-[1.1rem] rounded-full bg-slate-800/20 text-center text-[0.49rem] text-xs leading-[1.1rem] 2xl:-ml-2 2xl:size-6 2xl:text-sm 2xl:leading-6">
        {puntos}
      </span>
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
