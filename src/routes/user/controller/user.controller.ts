import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IUserService } from '../repository/interface/service';
import { USER_SERVICE_KEY } from '../service/user.key';
import { CreateUserDto, UpdateUserDto } from '../dto/user';
import { User } from '@prisma/client';

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
