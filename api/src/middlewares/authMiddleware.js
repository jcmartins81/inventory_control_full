import jwt from 'jsonwebtoken';

function extractToken(data) {
  const token = data || '';
  return token.replace('Bearer ', '');
}

export default function auth(req, res, next) {
  const token = extractToken(req.headers.authorization);
  jwt.verify(
    token,
    process.env.JWT_PUBLIC_KEY,
    {
      algorithm: 'RS256',
    },
    (err, decoded) => {
      if (err) return res.status(401).send({ error: 'Token invalid' });

      req.userId = decoded.id;
      return next();
    }
  );
}
