import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IResponse {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IResponse): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user.admin) {
      throw new Error('Only admin users can list all users');
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
