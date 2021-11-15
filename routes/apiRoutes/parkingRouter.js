import express from 'express';
import { CreateLotParking, GetParkingClient, RemoveLotParking, UpdateLotParking } from '../../app/controllers/parkingCtrl';

const router = express.Router();

router.post('/', CreateLotParking);

router.route('/:id')
    .get(GetParkingClient)
    .put(UpdateLotParking)
    .delete(RemoveLotParking);

export default router;