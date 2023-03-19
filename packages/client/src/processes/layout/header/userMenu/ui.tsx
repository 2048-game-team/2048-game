import { Space, Switch, Typography } from 'antd';
import { $theme, setTheme, Theme } from 'entities/ui';
import { useEvent, useUnit } from 'effector-react/ssr';
import { $isAuth, $user, setUserTheme } from 'processes/layout/model/model';

export const UserMenu = () => {
  const [theme, user, isAuth] = useUnit([$theme, $user, $isAuth]);
  const setThemeFn = useEvent(setTheme);
  const setUserThemeFn = useEvent(setUserTheme);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    setThemeFn(newTheme);
    if (isAuth) {
      setUserThemeFn({ theme: newTheme, userId: user!.id });
    }
  };

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
