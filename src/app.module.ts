import { Module } from '@nestjs/common';
import { UserModule } from './routes/user/user.module';
import { PostModule } from './routes/post/post.module';

@Module({
  imports: [UserModule, PostModule],
})
export class AppModule {}
