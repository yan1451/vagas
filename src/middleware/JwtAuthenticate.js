const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Substitua pelo sua chave secreta

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Falha na autenticação do token.' });
  }
};

module.exports = authenticateJWT;