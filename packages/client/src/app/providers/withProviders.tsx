import { FC, PropsWithChildren } from 'react';
import { WithTheme } from './withTheme';
import { WithErrorBoundaries } from './withErrorBoundaries';
import { WithNotifications } from 'app/providers/withNotifications';
import { WithRouter } from 'app/providers/withRouter';
import { WithStaticRouter } from 'app/providers/withStaticRouter';
import { ProvidersProps, TCComponents } from 'app/types';
import { WithEffector } from 'app/providers/withEffector';

export const WithProviders: FC<PropsWithChildren<ProvidersProps>> = ({
  children,
  location,
  scope,
}) => {
  const components: TCComponents = [
    WithEffector(scope),
    location ? WithStaticRouter(location + '/') : WithRouter,
    WithTheme,
    WithErrorBoundaries,
    WithNotifications,
  ];

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};
