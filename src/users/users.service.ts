import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }[] = [
    { id: 1, name: 'Jayanta', age: 32, gender: 'mail', isMarried: false },
    { id: 2, name: 'Robin', age: 30, gender: 'mail', isMarried: false },
    { id: 3, name: 'Sagor', age: 25, gender: 'mail', isMarried: false },
    { id: 4, name: 'Mou', age: 22, gender: 'femail', isMarried: false },
  ];

  create(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }) {
    return this.users.push(user);
    // return 'This action adds a new user';
  }

  findAll() {
    return this.users;
    // return `This action returns all users`;
  }

  findOne(id: number) {
    return this.users.find((x) => x.id === id);
    // return `This action returns a #${id} user`;
  }

  update(
    id: number,
    user: {
      id: number;
      name: string;
      age: number;
      gender: string;
      isMarried: boolean;
    },
  ) {
    return this.users.find((x) => x.id === id);
    // return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
