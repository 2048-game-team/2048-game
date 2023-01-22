import { ArgsProps } from 'antd/es/notification/interface';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface MessageProps extends ArgsProps {
  type: NotificationType;
}
