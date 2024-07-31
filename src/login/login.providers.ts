import { User } from './user.mysql.entity';

export const LoginProviders = [
  {
    provide: 'LOGIN_REPOSITORY',
    useFactory: async (AppDataSource) => await AppDataSource.getRepository(User),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
