import { User } from '../../model/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private static users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    UsersRepository.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, { name, email });

    UsersRepository.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    return UsersRepository.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    return UsersRepository.users.find((user) => user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    receivedUser.admin = true;

    return receivedUser;
  }

  list(): User[] {
    return UsersRepository.users;
  }
}

export { UsersRepository };
