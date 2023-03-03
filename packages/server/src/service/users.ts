import prisma from '../db';

class UserService {
  update = async ( id: number, name: string, avatar: string) => {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (user && (user.avatar !== avatar || user.name !== name)) {
      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          name,
          avatar,
        },
      });
      return updatedUser;
    }

    const newUser = await prisma.user.create({
      data: {
        id,
        name,
        avatar,
      },
    });

    return newUser;
  };
}

export const userService = new UserService();
