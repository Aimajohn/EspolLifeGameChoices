import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  children: JSX.Element
  titulo: string
}

export function Steps({ children, titulo }: Props) {
  return (
    <Card className="relative min-h-[55svh] w-full rounded-md border-none bg-slate-900 p-6 shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-slate-200 2xl:text-4xl">
          {titulo}
        </CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent className="text-slate-300/90">{children}</CardContent>
    </Card>
  )
}
