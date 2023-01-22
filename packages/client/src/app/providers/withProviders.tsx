import { FC, JSXElementConstructor, PropsWithChildren } from 'react';

import { WithRouter } from './withRouter';
import { WithTheme } from './withTheme';
import { WithErrorBoundaries } from './withErrorBoundaries';
import { WithNotifications } from 'app/providers/withNotifications';

type TCComponents = Array<JSXElementConstructor<PropsWithChildren<unknown>>>;

const components: TCComponents = [
  WithRouter,
  WithTheme,
  WithErrorBoundaries,
  WithNotifications,
];

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
};
