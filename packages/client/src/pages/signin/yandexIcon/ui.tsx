import React from 'react';
import { CustomIconComponentProps } from '@ant-design/icons/es/components/Icon';
import Icon from '@ant-design/icons';

const YandexSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="12" fill="#FC3F1D" />
    <path
      d="M13.6911 19.212H16.1982V4.81201H12.5516C8.88424 4.81201 6.95733 6.69748 6.95733 9.47388C6.95733 11.6909 8.01403 12.9962 9.89949 14.3429L6.62582 19.212H9.34007L12.9867 13.7628L11.7228 12.9133C10.1896 11.8773 9.44367 11.0693 9.44367 9.32885C9.44367 7.79561 10.5211 6.75964 12.5723 6.75964H13.6911V19.212Z"
      fill="white"
    />
  </svg>
);

const YandexSvgIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={YandexSvg} {...props} />
);

export const YandexIcon = <Icon component={YandexSvgIcon} />;
