import axios from 'axios'

export const gerarIdeia = async (caracteristicas: string) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: `Você é um empreendedor muito criativo e sempre tem muitas ideias. Agora, você vai gerar uma nova ideia de negócio:`
                },
                {
                    role: "user",
                    content: `Gere uma nova ideia de negócio com essas caracteristicas: ${caracteristicas}`
                }
            ],
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }, {
            headers: {
                'Authorization': `Bearer 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`,
                'Content-Type': 'application/json',
            },
        });

        return response.data.choices[0].message.content.trim()
    } catch (error) {
        throw error;
    }
}

