import React, { useState, useMemo, useRef } from 'react'
import { Draw } from './components/Draw'
import { Header } from './components/Header'
import { MenuContext } from './context'
import { useLocalStorage } from './hooks/useLocalStorage'

const menuContext = {
  color: '#000000',
  range: 10,
  lazyRadius: 10,
  catenaryColor: '#1538ea',
  gridSizeX: 15,
  gridSizeY: 15,
  gridLineWidth: 0.5,
  hideGridX: false,
  hideGridY: false
}

function App() {
  const [menuState, setMenuState] = useState(menuContext)
  const [settings] = useLocalStorage('drawSettings', {})
  const canvas = useRef()

  const value = useMemo(() => ({
    ...menuState,
    ...settings,
    setMenuState,
    canvas,
  }), [menuState, setMenuState, canvas, settings])

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
