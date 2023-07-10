import { StringField, BooleanField } from '@decorators/validation';

export interface PostDto {
  id?: string;
  title: string;
  content?: string;
  published?: boolean;
  authorId?: string;
}

export class CreatePostDto implements PostDto {
  @StringField(true)
  id?: string;

  @StringField()
  title: string;

  @StringField(true)
  content?: string;

  @BooleanField(true)
  published?: boolean;

  @StringField(true)
  authorId?: string;
}

export class UpdatePostDto implements Partial<PostDto> {
  @StringField(true)
  title?: string;

  @StringField(true)
  content?: string;

  @BooleanField(true)
  published?: boolean;

  @StringField(true)
  authorId?: string;
}
