import { Router } from 'express';
import cors from 'cors';
import LeadController from '../src/app/controllers/LeadController';
import EmailController from '../src/app/controllers/EmailController';

const routes = new Router();

routes.get('/leads', LeadController.index);
routes.get('/sendEmail', EmailController.send);
routes.post('/create-leads', LeadController.store);


export default routes;
