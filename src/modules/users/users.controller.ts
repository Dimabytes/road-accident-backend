import { Controller, Get, OnModuleInit, UseGuards } from '@nestjs/common';
import { UsersDao } from './users.dao';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { UserWithoutPassword } from './entities/user.entity';

@ApiTags('users')
@Controller('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UsersController implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    this.usersDao = await UsersDao.getDAO();
  }

  private usersDao: UsersDao;

  @Get()
  findAll(): Promise<UserWithoutPassword[]> {
    return this.usersDao.findAll();
  }
}
