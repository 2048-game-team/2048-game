import { Space, Switch, Typography } from 'antd';
import { $theme, setTheme, Theme } from 'entities/ui';
import { useStore } from 'effector-react';

export const UserMenu = () => {
  const theme = useStore($theme);

  const toggleTheme = () =>
    setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark);

  const checked = theme === Theme.Light;

  return (
    <Space wrap>
      <Typography.Text>Тема</Typography.Text>
      <Switch
        checkedChildren="День"
        unCheckedChildren="Ночь"
        checked={checked}
        onChange={toggleTheme}
      />
    </Space>
  );
};
