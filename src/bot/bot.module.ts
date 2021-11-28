import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BotService } from './bot.service';
import { ApiModule } from '../api/api.module';
// import { WsStartGateway } from './ws/ws.gateway';

@Module({
  imports: [HttpModule, ApiModule],
  providers: [BotService],
  exports: [BotService],
})
export class BotModule {}
