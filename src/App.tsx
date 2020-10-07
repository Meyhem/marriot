import React from 'react'
import { render } from 'react-dom'

import styled from 'styled-components'

const Appka = styled.div`
  background: black;
`

export const App = () => {
  return <Appka>Yo!</Appka>
}

render(<App />, document.getElementById('react-app'))
