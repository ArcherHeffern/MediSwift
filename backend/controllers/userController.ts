import User from '../models/user';
import { Request, Response } from 'express';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();

        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        });
    }
}


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

