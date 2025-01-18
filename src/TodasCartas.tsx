import Cartas from "@/assets/cartas.json"
import Card from "@/components/Card"
import PseudoCard from "@/components/PseudoCard"
import { initialHand } from "@/types"
import { IoCaretBackOutline } from "react-icons/io5"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
type Props = {
  children: JSX.Element
}

export function TodasCartas({ children }: Props) {
  const awa: JSX.Element[] = []
  Object.values({ ...Cartas, ...initialHand }).map((info) =>
    awa.push(
      <div className="h-72 w-48" key={info.id}>
        {info.src != "" ? (
          <Card info={info} id={info.id} />
        ) : (
          <PseudoCard info={info} id={info.id} />
        )}
      </div>,
    ),
  )
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[85svh] min-w-[75svw] border-none bg-slate-900 shadow-lg">
        <DialogHeader>
          <DialogTitle>
            <div className="flex items-center gap-4 px-12 pt-6 text-lg">
              <DialogPrimitive.Close className="flex size-12 items-center justify-center rounded-full bg-slate-200 p-2 text-lg hover:bg-slate-300/70">
                <IoCaretBackOutline className="-ml-1" size={40} />
              </DialogPrimitive.Close>
              <h1 className="text-3xl font-bold text-slate-200">
                Todas las cartas
              </h1>
            </div>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[65svh]">
          <div className="mx-12 flex flex-wrap items-start justify-start gap-4">
            {...awa}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
