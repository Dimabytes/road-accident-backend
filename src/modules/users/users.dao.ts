import { Repository } from 'typeorm';
import { getAppDataSource } from '../../orm/dataSource';
import { User } from './entities/user.entity';

type Repositories = {
  userRepository: Repository<User>;
};

export class UsersDao {
  private repositories: Repositories;
  private constructor(repositories: Repositories) {
    this.repositories = repositories;
  }

  public static async getDAO(): Promise<UsersDao> {
    const dataSource = await getAppDataSource();
    return new UsersDao({
      userRepository: dataSource.getRepository(User),
    });
  }

  public async findWithPasswordByUsername(username: string): Promise<User> {
    return this.repositories.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where({ username })
      .getOne();
  }

  public async findAll(): Promise<User[]> {
    return this.repositories.userRepository.find();
  }
}
