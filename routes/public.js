import express from 'express';
import { PrismaClient} from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
const prisma = new PrismaClient();

const JWT_SECRET =  process.env.JWT_SECRET;

// Cadastro
router.post('/cadastro', async (req, res) => {

    try{
        const user = req.body;
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(user.password, salt);

        // Cria novo usuario no banco
        const newUser = await prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: encryptedPassword
            }
        })

        res.status(201).json(newUser);

    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao cadastrar usuário.');
    }
});

// Login
router.post('/login', async (req, res) => {
    try{
        const user = req.body;

        // Busca usuario no banco
        const findUser = await prisma.user.findUnique({
            where: {
                email: user.email,    
            }
        })

        // Verifica se o usuario existe
        if(!user){
            return res.status(404).send('Usuário não encontrado.');
        }

        const isMatch = await bcrypt.compare(user.password, findUser.password);

        // Verifica se a senha está correta
        if(!isMatch){
            return  res.status(400).send('Senha inválida.');
        }

        // Gerar token JWT
        const token =jwt.sign({id: findUser.id}, JWT_SECRET, {expiresIn: '1h'});

        res.status(200).send(token);

    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao fazer login.');
    }
    
});

export default router;