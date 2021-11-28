import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiService } from './api.service';
// import { WsStartGateway } from './ws/ws.gateway';

@Module({
  imports: [HttpModule],
  providers: [ApiService],
  exports: [ApiService],
})
export class ApiModule {}
