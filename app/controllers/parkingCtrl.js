import Parking from '../models/parkingModel';
import { GenerateData } from '../jobs/queuPrincipal';

/* CRUD */
export async function CreateLotParking(req, res) {
    try {
        const {
            client_id,
            model,
            ref,
            category,
            descripition,
            createAt
        } = req.body;

        let data = GenerateData();
        data = data.slice(-8);
        data = data.slice(0, -3);

        if (!client_id) return res.status(400).json({ msg: "Erro, client_id não retornado!" });

        if (!ref) return res.status(400).json({ msg: "A referencia deve ser retornada!" });

        if (ref < 3) return res.status(400).json({ msg: "A referencia deve ser maior que 3!" });

        const newParking = new Parking({
            client_id,
            model,
            ref,
            category,
            descripition,
            createAt: data
        })

        await newParking.save();

        res.json();
    } catch (error) { if (error) throw error }
}


export async function GetParkingClient(req, res) {
    try {
        const client_id = req.params.id;

        let ref = "";
        if (req.query.ref !== null && req.query.ref !== '') {
            ref = new RegExp(req.query.ref, 'i')
        }

        try {
            const getLotsClient = await Parking.find({ client_id, ref });

            return res.json(getLotsClient);
        } catch (error) {
            return res.status(400).json({ msg: 'Não foi possivel achar!' })
        }
    } catch (error) { if (error) throw error }
}

export async function UpdateLotParking(req, res) {
    try {
        const {
            client_id,
            model,
            ref,
            category,
            descripition,
            createAt
        } = req.body;

        if (!ref) return res.status(400).json({ msg: "A referencia deve ser retornada!" });

        if (ref < 3) return res.status(400).json({ msg: "A referencia deve ser maior que 3!" });

        await Parking.findByIdAndUpdate({ _id: req.params.id }, {
            client_id,
            model,
            ref,
            category,
            descripition,
            createAt
        })

        return res.json();
    } catch (error) { if (error) throw error }
}

export async function RemoveLotParking(req, res) {
    try {
        await Parking.findByIdAndDelete(req.params.id);

        return res.json();
    } catch (error) { if (error) throw error }
}