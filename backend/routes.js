import express from 'express';
import { createUser, loginUser } from './controllers/userController';
import { getDrugs, createDrug, updateDrug } from './controllers/drugController';
import { checkout } from './controllers/checkoutController';

const router = express.Router();

router.get('/', (_, res) => {
    res.send("connected!").status(200);
});

// drugs

router.get('/api/v1/drugs', getDrugs);

router.post('/api/v1/drug', createDrug);

router.put('/api/v1/drug/:id', incrementDrug);

router.post('/api/v1/checkout', checkout);

// users

router.post('/api/v1/user', createUser);

router.post('/api/v1/auth/login', loginUser);

export default router;