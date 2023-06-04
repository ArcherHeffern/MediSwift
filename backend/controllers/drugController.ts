import Drug from '../models/drug';
import { Request, Response } from 'express';

export const getDrugs = async (req: Request, res: Response) => {
    try {
        const drugs = await Drug.find();
        res.json(drugs);
    } catch (error) {
        console.log(error);
    }
};

 export const createDrug = async (req: Request, res: Response) => {
    try {
        const drug = new Drug(req.body);
        await drug.save();
        res.status(201).json(drug);
    } catch (error) {
        console.log(error);
        res.status(409).send(error);
    }
};

export const updateDrug = async (req: Request, res: Response) => {

    const drug = await Drug.findOne({ where: { id: req.params.id } });
    if (!drug) {
        return res.status(404).json({ msg: 'Drug not found.' });
    }

    const { quantity } = req.body;
    drug.quantity = quantity;

    try {
        const updatedDrug = await drug.save();
        return res.status(200).json(updatedDrug);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Internal server error.' });
    }
}

export const deleteDrug = async (req: Request, res: Response) => {
    const drug = await Drug.findById(req.params.id);
    if (!drug) {
        return res.status(404).json({ msg: 'Drug not found.' });
    }

    try {
        await Drug.deleteOne(drug);
        return res.status(200).json({ msg: 'Drug deleted.' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Internal server error.' });
    }
}

export const deleteAllDrugs = async (req: Request, res: Response) => {
    try {
        await Drug.deleteMany({});
        return res.status(200).json({ msg: 'All drugs deleted.' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: 'Internal server error.' });
    }
}