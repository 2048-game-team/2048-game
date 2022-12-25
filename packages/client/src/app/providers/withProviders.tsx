import { FC, JSXElementConstructor, PropsWithChildren } from 'react'

import { WithRouter } from './withRouter'
import { WithTheme } from './withTheme'
import { WithRedux } from './withRedux'

type TCComponents = Array<JSXElementConstructor<PropsWithChildren<unknown>>>

const components: TCComponents = [WithRouter, WithTheme, WithRedux]

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}
