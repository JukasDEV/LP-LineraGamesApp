import axios from 'axios'

export const gerarCanvas = async (ideia: string) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: `Você é um consultor de empresa com mais de 15 anos de experiencia e vai gerar o canvas da ideia a seguir:`
                },
                {
                    role: "user",
                    content: `Gere o canvas dessa ideia: ${ideia}`
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

