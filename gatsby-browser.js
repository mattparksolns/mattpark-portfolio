import wrapWithProviders from "./wrap-with-providers"
export const wrapRootElement = wrapWithProviders

import React from 'react'
import Wrapper from './wrap-page'
export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Wrapper>
        {element}
      </Wrapper>
    </>
  )
}
