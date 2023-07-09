import { Type, applyDecorators } from '@nestjs/common';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  IsOptional,
  IsRFC3339,
  IsString,
  ValidateNested,
} from 'class-validator';

import { Type as TypeTransform } from 'class-transformer';

export const StringField = (optional = false) => {
  return optional
    ? applyDecorators(IsOptional(), IsString())
    : applyDecorators(IsString());
};

export const NumericField = (optional = false) => {
  return optional
    ? applyDecorators(IsOptional(), IsNumber())
    : applyDecorators(IsNumber());
};

export const BooleanField = (optional = false) => {
  return optional
    ? applyDecorators(IsOptional(), IsBoolean())
    : applyDecorators(IsBoolean());
};

export const ISODateField = (optional = false) => {
  return optional
    ? applyDecorators(IsOptional(), IsRFC3339())
    : applyDecorators(IsRFC3339());
};

export const ObjectField = <T>(type: Type<T>, optional = false) => {
  return optional
    ? applyDecorators(
        IsOptional(),
        IsObject(),
        ValidateNested(),
        TypeTransform(() => type),
      )
    : applyDecorators(
        IsObject(),
        ValidateNested(),
        TypeTransform(() => type),
      );
};

export const ArrayField = <T>(type: Type<T>, optional = false) => {
  return optional
    ? applyDecorators(
        IsOptional(),
        IsArray(),
        ValidateNested({ each: true }),
        TypeTransform(() => type),
      )
    : applyDecorators(
        IsArray(),
        ValidateNested({ each: true }),
        TypeTransform(() => type),
      );
};
