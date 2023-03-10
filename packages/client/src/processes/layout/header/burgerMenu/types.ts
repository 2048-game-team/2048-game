import { ReactNode } from 'react';

export interface NavItem {
  path: string;
  icon: ReactNode;
  title: string;
  authRequired: AuthRequired;
}

export enum AuthRequired {
  Yes = 'yes',
  No = 'no',
  Irrelevant = 'irrelevant',
}
