import { Request, Response } from "express";

export const checkout = async (req: Request, res: Response) => {
    res.send("checkout").status(200);
}
