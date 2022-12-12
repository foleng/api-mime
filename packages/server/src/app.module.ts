import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [ProjectModule, UserModule, MongooseModule.forRoot('mongodb://admin:123456@localhost:27017/api-mime?authSource=admin&readPreference=primary')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
