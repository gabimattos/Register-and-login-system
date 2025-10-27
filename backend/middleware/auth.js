import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export const auth = (req, res, next) => {
    try{

    // verifica se tem token no header
    const token = req.header('Authorization')?.replace('Bearer ', '');

    // se nao tiver token retorna erro 401, unauthorized
    if (!token) {
        return res.status(401).json({message: 'Acesso negado. Token não fornecido.'});
    }

    const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET);
    req.userId = decoded.id;

    // se tiver token, continua
    next()

    }
    // se o token for invalido, retorna erro 400, bad request
    catch(error){
        res.status(400).json({message: 'Token inválido.'});
    }
}

export default auth;