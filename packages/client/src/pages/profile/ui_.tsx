import React, { useState, useEffect } from 'react';
import { $isAuth, $user } from 'processes/layout/model/model';
import {
  UserResponse,
  UserUpdateRequest,
  ChangePasswordRequest,
} from 'shared/api/swagger';
import './model/init';
import {
  getUser,
  setAvatar,
  setUserData,
  setPassword,
  setAvatarFx,
  setUserDataFx,
  setPasswordFx,
} from './model';
import { AxiosError } from 'axios';
import { practicumApi } from 'shared/api/api';

export const Profile: React.FC = () => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    $user.watch(state => setUser(state));
    $isAuth.watch(state => setIsAuth(state));
    const errorHandler = ({ error }: { error: AxiosError }) => {
      try {
        const errorMessage = JSON.parse(error.request.response).reason;
        if (errorMessage) setErrorMsg(`Ошибка: ${errorMessage}`);
      } catch (err) {
        setErrorMsg('Неизвестная ошибка при выполнении запроса');
      }
    };
    setAvatarFx.fail.watch(errorHandler);
    setUserDataFx.fail.watch(errorHandler);
    setPasswordFx.fail.watch(errorHandler);
    getUser();
  }, []);

  const baseURL = practicumApi.instance.getUri();
  if (!isAuth) return <p>Пользователь не авторизован</p>;

  const avatarChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setErrorMsg('');
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
    setErrorMsg('');
    setUserData(newData);
  };

  const userPasswordChangeHandler = () => {
    // test data
    const newData: ChangePasswordRequest = {
      oldPassword: 'oldPassword',
      newPassword: 'newPassword',
    };
    setErrorMsg('');
    setPassword(newData);
  };

  return (
    <>
      <h1>
        Страничка тестирования API профиля (полноценным дизайном занимается
        Екатерина @eelarionova)
      </h1>
      <h2>Данные пользователя:</h2>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
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