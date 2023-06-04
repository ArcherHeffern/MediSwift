import User from '../models/user';
import { Request, Response } from 'express';

export const createUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });

        res.status(201).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}

export const loginUser = async (req: Request, res: Response) => {
    res.send("login user").status(200);
}

