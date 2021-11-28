import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BotService } from './bot.service';
import { BotController } from './bot.controller';
import { ApiModule } from '../api/api.module';
// import { WsStartGateway } from './ws/ws.gateway';

@Module({
  imports: [HttpModule, ApiModule],
  controllers: [BotController],
  providers: [BotService, BotController],
  exports: [BotService, BotController],
})
export class BotModule {}
