import { StringField } from 'src/decorators/validation';

export interface UserDto {
  id?: string;
  email: string;
  name?: string;
}

export class CreateUserDto implements UserDto {
  @StringField(true)
  id?: string;

  @StringField()
  email: string;

  @StringField(true)
  name?: string;
}

export class UpdateUserDto implements Partial<UserDto> {
  @StringField(true)
  email?: string;

  @StringField(true)
  name?: string;
}
