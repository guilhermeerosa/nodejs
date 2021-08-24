import { Router } from "express";
import { CompanyController } from "./controllers/CompanyController";
import { UserController } from "./controllers/UserController";

const userController = new UserController();
const companyController = new CompanyController();


const routes = Router();

routes.get('/user', userController.getAll);
routes.get('/user/:id', userController.getOne);


routes.get('/company', companyController.getAll);
routes.get('/company/:id', companyController.getOne);


export default routes;