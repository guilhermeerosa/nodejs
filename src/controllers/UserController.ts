import { Request, Response } from 'express';

class UserController {
    async getAll(request: Request, response: Response) {
        response.json({
            message: 'Lista de usuários'
        })

    }

    async getOne(request: Request, response: Response) {
        response.json({
            message: `Usuário #id ${request.params.id}`
        })
    }
}

export { UserController }