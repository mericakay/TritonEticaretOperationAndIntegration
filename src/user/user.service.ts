import { Injectable } from '@nestjs/common';
import { User } from './user.model'; // Doğru içe aktarma

@Injectable()
export class UserService {
  async create(user: User): Promise<User> {
    return await User.create(user);
  }

  async findAll(): Promise<User[]> {
    return await User.findAll();
  }
}
