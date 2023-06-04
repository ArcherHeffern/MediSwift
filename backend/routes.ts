import express from 'express';
import { getAllUsers, createUser, loginUser } from './controllers/userController';
import { getDrugs, createDrug, updateDrug, deleteDrug, deleteAllDrugs } from './controllers/drugController';
import { checkout } from './controllers/checkoutController';
import User from './models/user';

const router = express.Router();

router.get('/', (_, res) => {
    res.send("connected!").status(200);
});

// drugs
router.get('/api/v1/users', getAllUsers);

router.post('/api/v1/user', createUser);

router.post('/api/v1/auth/login', loginUser);

router.use(async function authenticate(req: express.Request, res: express.Response, next: express.NextFunction) {
    const user = await User.findOne({email: req.headers.email, password: req.headers.password });
    if (user) {
        res.locals.loggedInUser = user;
        next();
    } else {
        res.status(401).send('Invalid credentials');
    }
});

router.post('/api/v1/checkout', checkout);

router.get('/api/v1/drugs', getDrugs);

// authenticate seller
router.use(async function authenticateSeller(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (res.locals.loggedInUser.isSeller) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
});

router.put('/api/v1/drug/:id', updateDrug);

router.post('/api/v1/drug', createDrug);

router.delete('/api/v1/drug/:id', deleteDrug);

router.delete('/api/v1/drugs', deleteAllDrugs);

// users


export default router;