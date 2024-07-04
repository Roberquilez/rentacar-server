import jwt from 'jsonwebtoken';
const SECRET_KEY = 'your_secret_key';

const rentACarMiddleware = (req, res, next) => {
    const token = req.headers['rentacar'];
    if (!token) {
        console.log('No RentACar token provided');
        res.locals.logged = false;
        return next();
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log('RentACar token:', decoded);
        res.locals.logged = true;
    } catch (error) {
        console.log('Invalid RentACar token');
        res.locals.logged = false;
    }

    next();
};

export default rentACarMiddleware;