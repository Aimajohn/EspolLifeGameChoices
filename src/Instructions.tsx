import { Steps } from "@/components/Steps"
import { playerInfo } from "./types"
import AmigoFiestero from "@/assets/InstruccionCard.png"
import Atributos from "@/assets/atributos.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./components/ui/button"
import { Link } from "react-router-dom"
import { lazy } from "react"
const StatsBar = lazy(() => import("./components/StatsBar"))

type Props = {}

function Instructions({}: Props) {
  const bloques = [
    <CarouselItem key={"001"}>
      <div className="p-1">
        <Steps titulo="Instrucciones">
          <div className="leading-sm text-md 2xl:text-[1.4rem]">
            <p>
              Para esta DEMO te encuentras en la <b>fase final del semestre </b>{" "}
              <br />
              Tienes solo <b>una semana</b> para prepararte, se acerca el temido
              examen final
            </p>
            <div className="flex">
              <div className="inline-block w-1/2 p-4">
                <StatsBar playerInfo={playerInfo} />
              </div>
              <div className="text-md mt-4 w-1/2 2xl:text-[1.3rem]">
                Para superarlo debes subir tus atributos de{" "}
                <b>conocimiento a 70 puntos</b>. <br />
                Además de al menos <b> 60 puntos </b> en otros dos atributos y
                así realizar el examen de forma exitosa. <br />
              </div>
            </div>
          </div>
        </Steps>
      </div>
    </CarouselItem>,
    <CarouselItem key={"002"}>
      <div className="p-1">
        <Steps titulo="Instrucciones">
          <div className="text-md flex justify-between 2xl:text-[1.4rem]">
            <div className="w-3/5">
              <p>
                Aumentas tus atributos jugando cartas, hay dos tipos: eventos y
                personajes, cada carta interactúa de forma positiva o negativa
                con tus atributos, debes elegir cuidadosamente para llegar a tu
                meta.
              </p>
              <div className="mt-4 w-[70%]">
                <img src={Atributos} alt="" />
              </div>
              <Link to={"/Game"} className="w-full">
                <Button className="mt-6 w-full py-8 text-lg">
                  Jugar Ahora!
                </Button>
              </Link>
            </div>

            <div className="-mt-12 w-1/3">
              <img src={AmigoFiestero} alt="" />
            </div>
          </div>
        </Steps>
      </div>
    </CarouselItem>,
  ]

  return (
    <main className="flex h-svh items-center bg-indigo-950/30 transition">
      <div className="mx-auto w-[50%] 2xl:-mt-20">
        <Carousel className="w-full">
          <CarouselContent>{bloques}</CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </main>
  )
}

export default Instructions
