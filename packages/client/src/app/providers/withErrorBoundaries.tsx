import { FC, PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const onErrorHandler = (error: Error, info: {componentStack: string}) => { 
  console.log(`Error: ${error} `);
  console.log(`Error info: ${info}`);
};

const fallbackRenderHandler = () => <div>There is an error occured.</div>;

export const WithErrorBoundaries: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorBoundary
      fallbackRender={fallbackRenderHandler}
      onError={onErrorHandler}
    >
      {children}
    </ErrorBoundary>
  );
};
