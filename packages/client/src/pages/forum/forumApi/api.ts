import axios from 'axios';
import { ServerUrl } from 'root/const';
import { notification } from 'antd';
import { apiPath } from './apiPath';
import { NewMessage, NewTopic } from 'pages/forum';

export const getForumData = async () => {
  try {
    return await axios.get(ServerUrl + apiPath.getAll);
  } catch (e) {
    notification.error({
      message: 'Ошибка',
      description: 'Ограничение доступа к базе данных',
    });
  }
};

export const postNewTopic = async (data: NewTopic) => {
  try {
    return await axios.post(ServerUrl + apiPath.createTopic, data);
  } catch (e) {
    notification.error({
      message: 'Ошибка',
      description: 'Ограничение доступа к базе данных',
    });
  }
};

export const postNewMessage = async (data: NewMessage) => {
  try {
    return await axios.post(ServerUrl + apiPath.createMessage, data);
  } catch (e) {
    notification.error({
      message: 'Ошибка',
      description: 'Ограничение доступа к базе данных',
    });
  }
};
