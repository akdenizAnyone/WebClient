import React from 'react'
import Container from './layout/Container'
import Sidebar from './layout/Sidebar'
import Content from './layout/Content'
import Widget from './layout/Widget'

const App = () => {
  return (
    <Container>
      <Sidebar/>
      <Content/>
      <Widget/>
    </Container>
  )
}

export default App