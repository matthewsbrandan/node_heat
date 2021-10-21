import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

interface IRequestAuth extends Request{
  user_id: string
}
class CreateMessageController{
  async handle(request: IRequestAuth, response: Response){
    const { message } = request.body;
    const { user_id } = request;

    const service = new CreateMessageService();
    const result = await service.execute(message, user_id);

    return response.json(result);
  }
}

export { CreateMessageController };