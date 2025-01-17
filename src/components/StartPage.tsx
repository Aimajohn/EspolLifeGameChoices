import React from "react"
import { Button } from "./ui/button"
import Logo from "@/assets/Inicio/GameLogo.png"
import { Ghost } from "lucide-react"
import { useNavigate } from "react-router-dom"
import CloudA from "/EspolLifeGameChoices/src/assets/Inicio/Cloud1.png"
import CloudB from "/EspolLifeGameChoices/src/assets/Inicio/Cloud2.png"
import FondoGame from "./FondoGame"

type Props = {}

function StartPage({}: Props) {
  const navegador = useNavigate()
  return (
    <main className="relative flex h-svh flex-col justify-between">
      <section id="TopSection" className="2xl:p-6">
        <div className="flex items-center justify-center 2xl:pt-12">
          <div className="w-1/3">
            <img src={CloudB} alt="" />
          </div>
          <Button
            onClick={() => navegador("/")}
            variant={"ghost"}
            className="h-[18rem] w-1/5 bg-[url('/EspolLifeGameChoices/src/assets/Inicio/GameLogo.png')] bg-contain bg-center bg-no-repeat p-4 2xl:w-1/3"
          ></Button>
          <div className="w-1/3">
            <img src={CloudA} alt="" />
          </div>
        </div>
      </section>
      <section
        id="BottomSection"
        className="relative flex w-full justify-center"
      >
        <div className="absolute bottom-40 z-10 flex w-1/3 flex-col items-center gap-1">
          <Button
            onClick={() => navegador("/Instructions")}
            variant={"ghost"}
            className="h-32 w-[90%] bg-[url('/EspolLifeGameChoices/src/assets/Inicio/StartButton.png')] bg-contain bg-center bg-no-repeat hover:bg-[url('/EspolLifeGameChoices/src/assets/Inicio/StartButton2.png')]"
          />
          <Button
            variant={"ghost"}
            className="h-32 w-[30%] bg-[url('/EspolLifeGameChoices/src/assets/Inicio/ExitButton.png')] bg-contain bg-center bg-no-repeat hover:bg-[url('/EspolLifeGameChoices/src/assets/Inicio/ExitButton3.png')]"
          />
        </div>
      </section>
    </main>
  )
}

export default StartPage
