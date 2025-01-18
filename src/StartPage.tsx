import { Button } from "./components/ui/button"
import { useNavigate } from "react-router-dom"
import CloudA from "/assets/Inicio/Cloud1.png"
import CloudB from "/assets/Inicio/Cloud2.png"

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
            className="h-[18rem] w-1/5 bg-[url('/assets/Inicio/GameLogo.png')] bg-contain bg-center bg-no-repeat p-4 2xl:w-1/3"
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
        <div className="absolute bottom-20 z-10 flex w-1/3 flex-col items-center gap-1 2xl:bottom-40">
          <Button
            onClick={() => navegador("/Instructions")}
            variant={"ghost"}
            className="h-24 w-[90%] bg-[url('/assets/Inicio/StartButton.png')] bg-contain bg-center bg-no-repeat hover:bg-[url('/assets/Inicio/StartButton2.png')] 2xl:h-32"
          />
          <Button
            variant={"ghost"}
            className="h-24 w-[30%] bg-[url('/assets/Inicio/ExitButton.png')] bg-contain bg-center bg-no-repeat hover:bg-[url('/assets/Inicio/ExitButton3.png')] 2xl:h-32"
          />
        </div>
      </section>
    </main>
  )
}

export default StartPage
