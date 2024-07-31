import { Login } from './user.mysql.entity';

export const LoginProviders = [
  {
    provide: 'LOGIN_REPOSITORY',
    useFactory: async (AppDataSource) => await AppDataSource.getRepository(Login),
    inject: ['MYSQL_DATA_SOURCE'],
  },
];
