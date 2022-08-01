import React, { useState, useMemo, useRef } from 'react'
import { Draw } from './components/Draw'
import { Header } from './components/Header'
import { MenuContext } from './context'

const menuContext = {
  color: '#000000',
  range: 10,
  lazyRadius: 10,
  catenaryColor: '#1538ea',
  gridSizeX: 15,
  gridSizeY: 15,
  gridLineWidth: 0.5,
  hideGridX: false,
  hideGridY: false,
  canvas: null
}

function App() {
  const [menuState, setMenuState] = useState(menuContext)
  const canvas = useRef()

  const value = useMemo(() => ({
    menuState,
    setMenuState,
    canvas
  }), [menuState, setMenuState, canvas])

  // useEffect(() => {
  //   const data = localStorage.getItem('drawSettings')
  //   if (data) setMenuState({ ...menuState, ...data })
  // }, [])
  if (localStorage.getItem('drawSettings')) {
    setMenuState(
      {
        ...menuState,
        ...JSON.parse(localStorage.getItem('drawSettings'))
      }
    )
    localStorage.removeItem('drawSettings')
  }

  return (
    <div className="App">
      <MenuContext.Provider
        value={value}
      >
        <Header />
        <Draw ref={canvas} />
      </MenuContext.Provider>
    </div>
  )
}

export default App
