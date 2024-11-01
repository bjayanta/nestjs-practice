import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(
    @Body()
    user: {
      id: number;
      name: string;
      age: number;
      gender: string;
      isMarried: boolean;
    },
  ) {
    return this.usersService.create(user);
  }

  @Get()
  findAll(@Query() query: any) {
    console.log(query);

    if (query.gender) {
      return this.usersService
        .findAll()
        .filter((user) => user.gender === query.gender);
    }

    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    user: {
      id: number;
      name: string;
      age: number;
      gender: string;
      isMarried: boolean;
    },
  ) {
    return this.usersService.update(+id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
