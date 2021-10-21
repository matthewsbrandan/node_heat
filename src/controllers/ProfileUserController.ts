import { Request, Response } from 'express';
import { ProfileUserService } from '../services/ProfileUserService';

interface IRequestAuth extends Request{
  user_id: string;
}
class ProfileUserController{
  async handle(request: IRequestAuth, response: Response){
    const { user_id } = request;
    const service = new ProfileUserService();
    const result = service.execute(user_id);

    response.json(result);
  }
}

export { ProfileUserController };