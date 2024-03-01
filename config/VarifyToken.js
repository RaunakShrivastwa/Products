import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ error: 'Invalid Token not exist' });
    }

    jwt.verify(token, process.env.SecreteKey, (err, data) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid Token' });
      } else {
        req.user = data;
        next();
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default authenticateUser;
