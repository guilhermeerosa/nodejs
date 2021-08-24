import { Request, Response } from 'express';

class CompanyController {
    async getAll(request: Request, response: Response) {
        response.json({
            message: 'Lista de companhias!'
        })
    }

    async getOne(request: Request, response: Response) {
        response.json({
            message: `Companhia #id ${request.params.id}`
        })
    }
}

export { CompanyController }