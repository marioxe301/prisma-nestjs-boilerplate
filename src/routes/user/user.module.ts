import { Module } from '@nestjs/common';
import { USER_SERVICE_KEY } from './service/user.key';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { PRISMA_SERVICE_KEY } from '@prisma/module/prisma.key';
import { PrismaService } from '@prisma/module/prisma.service';

@Module({
  providers: [
    { provide: USER_SERVICE_KEY, useClass: UserService },
    { provide: PRISMA_SERVICE_KEY, useClass: PrismaService },
  ],
  controllers: [UserController],
})
export class UserModule {}
