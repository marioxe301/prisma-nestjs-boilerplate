import { Module } from '@nestjs/common';
import { USER_SERVICE_KEY } from './service/user.key';
import { UserService } from './service/user.service';
import { PRISMA_SERVICE_KEY } from 'src/prisma/prisma.key';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserController } from './controller/user.controller';

@Module({
  providers: [
    { provide: USER_SERVICE_KEY, useClass: UserService },
    { provide: PRISMA_SERVICE_KEY, useClass: PrismaService },
  ],
  controllers: [UserController],
})
export class UserModule {}
