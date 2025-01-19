// import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis, LabelList } from "recharts"
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { PlayerInfoT } from "../types"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  points: {
    label: "Puntos",
  },
  energia: {
    label: "Energía",
    color: "hsl(var(--chart-1))",
  },
  conocimiento: {
    label: "Conocimiento",
    color: "hsl(var(--chart-2))",
  },
  social: {
    label: "Social",
    color: "hsl(var(--chart-3))",
  },
  money: {
    label: "Dinero",
    color: "hsl(var(--chart-4))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig

type Props = {
  playerInfo: PlayerInfoT
}

function StatsBar({ playerInfo }: Props) {
  const chartData = [
    {
      browser: "Energia",
      points: playerInfo.energia,
      fill: "var(--color-energia)",
    },
    {
      browser: "Conocimiento",
      points: playerInfo.conocimiento,
      fill: "var(--color-conocimiento)",
    },
    {
      browser: "Social",
      points: playerInfo.social,
      fill: "var(--color-social)",
    },
    { browser: "Dinero", points: playerInfo.money, fill: "var(--color-money)" },
  ]
  return (
    <Card className="rounded-sm border-0 bg-slate-900/80 pt-4 shadow-none">
      <CardHeader className="-my-4 text-center text-sm leading-none text-slate-300 2xl:text-xl">
        <CardTitle>Atributos</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={0}
              axisLine={false}
              tickFormatter={(value) => value}
              hide
            />
            <XAxis dataKey="points" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="points" layout="vertical" radius={5}>
              <LabelList
                dataKey="browser"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={16}
                fontWeight={600}
              />
              <LabelList
                dataKey="points"
                position="insideRight"
                offset={8}
                className="fill-[--color-label]"
                fontSize={16}
                fontWeight={500}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default StatsBar
