import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/services/database";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Realiza o login de um usuário.
 *     tags:
 *       - Login Methods
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login bem-sucedido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensagem de sucesso.
 *                 token:
 *                   type: string
 *                   description: Token de autenticação JWT.
 *       401:
 *         description: Senha incorreta.
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { email, password } = await req.json();

        // Procura o user com o email fornecido
        const user = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new Error("Usuário não encontrado")
        }

        if(!user.password){
            throw new Error("Sem senha.");
        }
        // Verifica se a senha fornecida corresponde à senha no banco de dados

        const senhaCorreta = bcrypt.compare(password, user.password);

        if (!senhaCorreta) {
            return NextResponse.json({
                message: "Senha incorreta",
            }, { status: 401 });
        }

        //@ts-ignore
        const token = jwt.sign({ userId: user.id },  process.env.JWT_SECRET , { expiresIn: '12h' });

        // Autenticação bem-sucedida, retornando o token
        return NextResponse.json({
            message: "Login bem-sucedido",
            token: token,
            userid: user.id,
            currentPLan: user.currentPlan,
            email: user.email,
            qtdTickets: user.qtdTickets

        });
    } catch (err: unknown) {
        const error = (err as Error).toString();
        console.log(error)
        return NextResponse.json({
            message: error,
        }, { status: 500 });
    }
}
