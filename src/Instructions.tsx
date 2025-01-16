import { useState } from "react"
import { Steps } from "@/components/Steps"
import { StatsBar } from "./components/StatsBar"
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

type Props = {}

function Instructions({}: Props) {
  const bloques = [
    <CarouselItem key={"001"}>
      <div className="p-1">
        <Steps titulo="Instrucciones">
          <div className="text-[1.4rem] leading-relaxed">
            <p>
              Para esta DEMO te encuentras en la{" "}
              <b>fase final del semestre! </b> <br />
              Tienes solo <b>una semana</b> para prepararte, se acerca el temido
              examen final!!!
            </p>
            <div className="flex">
              <div className="inline-block w-1/2">
                <StatsBar playerInfo={playerInfo} />
              </div>
              <div className="mt-4 w-1/2 text-[1.3rem]">
                Para superarlo debes subir tus atributos de{" "}
                <b>conocimiento a 70 puntos</b>. <br />
                Pero no solo eso, estudiar hasta el cansancio te impedirá
                realizar el examen correctamente <br />
                Debes llegar al día del examen con al menos{" "}
                <b>60 puntos de energía</b>.
              </div>
            </div>
          </div>
        </Steps>
      </div>
    </CarouselItem>,
    <CarouselItem key={"002"}>
      <div className="p-1">
        <Steps titulo="Instrucciones">
          <div className="flex justify-between text-[1.4rem]">
            <div className="w-3/5">
              <p>
                Aumentas tus atributos jugando tus cartas, hay dos tipos eventos
                y persojes, cada carta interactua de forma positiva o negativa
                con tus atributos, debes elegir cuidadosamente para llegar a tu
                meta!
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
    <main className="pt-40">
      <div className="mx-auto w-[50%]">
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
