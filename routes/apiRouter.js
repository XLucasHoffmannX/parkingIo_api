import GenIdRoute from './apiRoutes/genIdRouter'
import ParkingRoute from './apiRoutes/parkingRouter';

const apiRouter = {
    GenerateId: {
        route: 'genid',
        dir: GenIdRoute
    },
    Parking: {
        route: 'parking',
        dir: ParkingRoute
    }
}

export default apiRouter;