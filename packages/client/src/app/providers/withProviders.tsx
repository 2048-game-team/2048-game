import { FC, JSXElementConstructor, PropsWithChildren } from 'react'

import { WithRouter } from './withRouter'
import { WithTheme } from './withTheme'
import { WithErrorBoundaries } from './withErrorBoundaries'

type TCComponents = Array<JSXElementConstructor<PropsWithChildren<unknown>>>

const components: TCComponents = [WithRouter, WithTheme, WithErrorBoundaries]

export const WithProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}
