import Link from "next/link"

const asks = [
    {
        question: "Quais tipos de apps o betsinais oferece?",
        answer: "Oferecemos análises detalhadas dos jogos de casas de apostas."
    },
   
]


export default function Faq(){
    return (
        <>
        <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="max-w-2xl mx-auto space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Perguntas Frequentes</h2>
                    <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                    Tem alguma pergunta? Nós temos as respostas. Se você tiver outras perguntas, sinta-se à vontade para nos enviar uma mensagem no 
                    <Link href="https://wa.me/">Whatsapp</Link>
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="border rounded-lg">
                    {asks.map((item, index) => (
                        <details className="border-b" key={index}>
                            <summary className="p-4 list-none" style={{ fontWeight: 'bold' }}>{item.question}</summary>
                            <div className="p-4 bg-gray-50 dark:bg-gray-950">
                                {item.answer}
                            </div>
                        </details>
                    ))}
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
