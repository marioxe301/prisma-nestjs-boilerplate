import {
  Controller,
  Inject,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto, UpdateUserDto } from '../dto/user';
import { IUserService } from '../repository/interface/service';
import { USER_SERVICE_KEY } from '../service/user.key';

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE_KEY) private readonly userService: IUserService,
  ) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    const result = await this.userService.findMany({});
    return result;
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const result = await this.userService.findUnique({ where: { id } });
    return result;
  }

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<User> {
    const result = await this.userService.create({ data: user });
    return result;
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    const result = await this.userService.update({ where: { id }, data: user });
    return result;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    const result = await this.userService.delete({ where: { id } });
    return result;
  }
}
