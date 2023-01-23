import { FC, PropsWithChildren, useEffect } from 'react';
import { useStore } from 'effector-react';
import { $message } from 'entities/notification/model';
import { notification } from 'antd';

export const WithNotifications: FC<PropsWithChildren> = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();
  const message = useStore($message);

  useEffect(() => {
    if (message) {
      const { type, ...messageDetails } = message;
      api[type]({
        placement: 'bottomRight',
        ...messageDetails,
      });
    }
  }, [message]);

  return (
    <>
      {contextHolder}
      {children}
    </>
  );
};
