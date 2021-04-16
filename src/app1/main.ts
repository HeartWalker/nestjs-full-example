import { bootstrap } from '@packages/server';
import { App1 } from './app1.module';


bootstrap([App1]);

// import { Module } from '@nestjs/common';
// import { bootstrap } from '@packages/server';
// import { bootstrapModule } from '@packages/server/src/bootstrap';
// import { ConfigModule } from '@packages/server/src/config.module';
// import { AppController } from '@packages/server/src/app.controller';
// import { App1 } from './app1.module';
// import { AppService } from '@packages/server/src/app.service';




// @Module({
//   imports: [ConfigModule.register({path:"config/config.json"})],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

// bootstrapModule(AppModule)