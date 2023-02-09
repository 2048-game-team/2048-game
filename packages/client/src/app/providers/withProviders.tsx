import { FC, JSXElementConstructor, PropsWithChildren } from 'react';

import { WithRouter } from './withRouter';
import { WithTheme } from './withTheme';
import { WithErrorBoundaries } from './withErrorBoundaries';
import { WithNotifications } from 'app/providers/withNotifications';
import { TAppProps } from 'app/types';

type TCComponents = Array<JSXElementConstructor<PropsWithChildren<unknown>>>;

const components: TCComponents = [
  WithRouter,
  WithTheme,
  WithErrorBoundaries,
  WithNotifications,
];

export const WithProviders: FC<PropsWithChildren<TAppProps>> = props => {
  const { children, isSSR } = props;
  // Для SSR отключаем HOC с BrowserRouter, вместо него приложение будет обернуто в StaticRouter (см. ssr.tsx)
  if (isSSR) components.splice(0, 1);
  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};
