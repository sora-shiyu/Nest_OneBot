import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { BotModule } from './bot/bot.module';
import { AppService } from './app.service';

// import { WsStartGateway } from './ws/ws.gateway';

@Module({
  imports: [HttpModule, BotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
