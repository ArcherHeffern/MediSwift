import Drug from '../models/drug';  

export const getDrugs = async (req, res) => {
    try {
        const drugs = await Drug.find({});
        res.json(drugs);
    } catch (error) {
        console.log(error);
    }
};

 export const createDrug = async (req, res) => {
    try {
        const drug = new Drug(req.body);
        await drug.save();
        res.status(201).json(drug);
    } catch (error) {
        console.log(error);
        res.status(409).json({message: error.message});
    }
};

// export const updateDrug = async (req, res) => {
// }



