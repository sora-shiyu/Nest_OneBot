import { Injectable } from '@nestjs/common';
// import { MsgPrivate, MsgGroup, poke } from '../app.decorator';
// import { GroupMsg, pokeMsg, privateMsg } from './bot.dto';
import { ApiService } from '../api/api.service';
@Injectable()
export class BotService {
  constructor(private readonly api: ApiService) {}
}
