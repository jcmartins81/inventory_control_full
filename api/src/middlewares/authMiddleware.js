import jwt from 'jsonwebtoken'
import path from "path";
import dotenv from "dotenv";
const { resolve, join } = path;

dotenv.config({
    path: join(resolve(), './src/config/', '.env'),
});

export default function (req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) return res.status(401).send({error: 'No token provided' })

    const parts = authHeader.split(' ')

    if(!parts.length === 2) return res.status(401).send({ error: 'Token error'})

    const [ scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: 'Token malformatted'})

    jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
        if(err) return res.status(401).send({error: 'Token iinválid'})

        req.userId = decoded.id

        return next()
    })

}