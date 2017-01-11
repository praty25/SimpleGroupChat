import { Router } from 'express';
import * as ChatController from '../controllers/chat.controller';
const chatRouter = new Router();

chatRouter.route('/chat').post(ChatController.addMessage);

chatRouter.route('/chat').get(ChatController.getMessage);

export default chatRouter