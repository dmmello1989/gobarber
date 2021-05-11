import fs from 'fs';
import path from 'path';
import { getRepository } from 'typeorm';

import User from '../models/User';
import uploadConfig from '../config/upload';

interface Request {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<void> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new Error('Only authenticated users can update avatar.');
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }
  }
}

export default UpdateUserAvatarService;
// 8:41
