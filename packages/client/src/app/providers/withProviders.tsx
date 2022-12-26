import { FC, JSXElementConstructor, PropsWithChildren } from 'react'

import { WithRouter } from './withRouter'
import { WithTheme } from './withTheme'

type TCComponents = Array<JSXElementConstructor<PropsWithChildren<unknown>>>

const components: TCComponents = [WithRouter, WithTheme]

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}
