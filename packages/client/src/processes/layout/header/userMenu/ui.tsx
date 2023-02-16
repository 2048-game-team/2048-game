import { Space, Switch, Typography } from 'antd';
import { $theme, setTheme, Theme } from 'entities/ui';
import { useEvent, useStore } from 'effector-react/ssr';

export const UserMenu = () => {
  const theme = useStore($theme);
  const setThemeFn = useEvent(setTheme);

  const toggleTheme = () =>
    setThemeFn(theme === Theme.Dark ? Theme.Light : Theme.Dark);

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
