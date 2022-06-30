import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService){

  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: createUserDto,
    });

    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany({
      orderBy: {
        id: 'asc'
      }
    });
  }

  async findOne(id: number) {
    return await this.prisma.user.findFirst({
      where:{
        id
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id
      },
      data: updateUserDto
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}
