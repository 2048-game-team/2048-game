import React, { useEffect } from 'react';
import { $isAuth, $user } from 'processes/layout/model/model';
import { useStore } from 'effector-react';
import {
  UserUpdateRequest,
  ChangePasswordRequest,
} from 'shared/api/swagger';
import './model/init';
import {
  getUser,
  setAvatar,
  setUserData,
  setPassword
} from './model';
import { baseURL } from './const';

export const Profile: React.FC = () => {
  const user = useStore($user);
  const isAuth = useStore($isAuth);

  useEffect(() => {
    getUser();
  }, []);

  if (!isAuth) return <p>Пользователь не авторизован</p>;

  const avatarChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setAvatar({ avatar: e.currentTarget.files[0] as File });
    }
  };

  const userDataChangeHandler = () => {
    // test data
    const newData: UserUpdateRequest = {
      first_name: `new${user?.first_name ?? ''}`,
      second_name: `new${user?.second_name ?? ''}`,
      display_name: `new${user?.display_name ?? ''}`,
      login: `new${user?.login ?? ''}`,
      phone: `${user?.phone ?? ''}`,
      email: `new${user?.email ?? ''}`,
    };
    setUserData(newData);
  };

  const userPasswordChangeHandler = () => {
    // test data
    const newData: ChangePasswordRequest = {
      oldPassword: 'oldPassword',
      newPassword: 'newPassword',
    };
    setPassword(newData);
  };

  return (
    <>
      <h1>
        Страничка тестирования API профиля (полноценным дизайном занимается
        Екатерина @eelarionova)
      </h1>
      <h2>Данные пользователя:</h2>
      <p>{JSON.stringify(user, null, 2)}</p>
      <h2>Аватар:</h2>
      <img
        alt="avatar"
        src={`${baseURL}/resources/${user?.avatar}`}
        style={{ display: 'block', width: '200px', height: '200px' }}></img>
      <input type="file" onChange={avatarChangeHandler} />
      <h2>Изменение личных данных:</h2>
      <button onClick={userDataChangeHandler}>Изменить</button>
      <h2>Изменение пароля:</h2>
      <button onClick={userPasswordChangeHandler}>Изменить</button>
    </>
  );
};
