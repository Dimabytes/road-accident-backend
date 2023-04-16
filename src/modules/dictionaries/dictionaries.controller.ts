import {
  Controller,
  Get,
  Param,
  OnModuleInit,
  UseGuards,
} from '@nestjs/common';
import { DictionariesDao, DictionaryType } from './dictionaries.dao';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { Dictionary } from './entities/dictionaries.entity';

@ApiTags('dictionaries')
@Controller('dictionaries')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class DictionariesController implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    this.dictionariesDao = await DictionariesDao.getDAO();
  }

  private dictionariesDao: DictionariesDao;

  @Get(':dictionary')
  async findOne(
    @Param('dictionary') dictionary: DictionaryType,
  ): Promise<Dictionary[]> {
    return await this.dictionariesDao.findAll(dictionary);
  }
}
