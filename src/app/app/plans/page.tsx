import { DashboardPage, DashboardPageMain } from "@/components/app/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function Page(){
    return (
        <DashboardPage>
            <DashboardPageMain>
                <div className="w-full py-6">
                    <div className="container flex flex-col gap-4 px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-2 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Escolha um plano</h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                            Desbloqueie mais funcionalidades e suporte. Melhore sua conta para acessar funcionalidades premium e serviços.
                            </p>
                        </div>
                        </div>
                        <div className="grid max-w-sm gap-4 mx-auto sm:max-w-none sm:grid-cols-2">
                        <Card>
                            <CardHeader className="p-4 flex flex-col items-start">
                                <div className="text-2xl font-bold">Starter</div>
                                <div className="text-2xl font-bold">R$ 49,00</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Mensal</div>
                            </CardHeader>
                            <CardContent className="p-4 grid gap-4">
                                <ul className="grid gap-2">
                                    <li>Gerador de Canvas para seu negócio;</li>
                                    <li>Gerador de Ideias para negócios;</li>
                                    <li>Suporte 24/7</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <a href="https://pay.kirvano.com/333bf29c-c269-4b65-a804-077b092883bc" target="blank" className="w-full">
                                    <Button size="lg" className="w-full">Upgrade Agora</Button>
                                </a>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader className="p-4 flex flex-col items-start">
                            <div className="text-2xl font-bold">Pro</div>
                            <div className="text-2xl font-bold">R$ 69,00</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">Mensal</div>
                            </CardHeader>
                            <CardContent className="p-4 grid gap-4">
                            <ul className="grid gap-2">
                                    <li>Todas as funcionalidades do plano Starter;</li>
                                    <li>Gerador de Plano de ação para sua ideia;</li>
                                    <li>Suporte 24/7</li>
                            </ul>
                            </CardContent>
                            <CardFooter>
                                <a href="https://pay.kirvano.com/1caf3f96-57bc-4701-84d2-f88834cb383b" target="blank" className="w-full">
                                    <Button size="lg" className="w-full">Upgrade Agora</Button>
                                </a>
                            </CardFooter>
                        </Card>
                        </div>
                    </div>
                    </div>
            </DashboardPageMain>
        </DashboardPage>
    )
}