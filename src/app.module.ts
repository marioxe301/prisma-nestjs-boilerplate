import { Module } from '@nestjs/common';
import { PostModule } from '@routes/post/post.module';
import { UserModule } from '@routes/user/user.module';

@Module({
  imports: [UserModule, PostModule],
})
export class AppModule {}
