import { Scope } from 'effector';
import { JSXElementConstructor, PropsWithChildren } from 'react';

export type TAppProps = {
  scope: Scope;
  location?: string;
};

export type ProvidersProps = {
  scope: Scope;
  location?: string;
};

export type TCComponents = Array<
  JSXElementConstructor<PropsWithChildren<unknown>>
>;
