import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

import { FaQuestion } from "react-icons/fa"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HelpButton() {
  const navegador = useNavigate()
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          onClick={() => navegador("/Instructions")}
          size="bigIcon"
          className="absolute right-2 top-2 rounded-sm bg-gray-600 hover:bg-gray-500"
        >
          <FaQuestion />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-36">
        <div className="flex justify-between">
          <p className="text-sm">Volver al tutorial</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
