import React, { useState } from 'react'
import { Menu } from './components/Menu'
// import { useFormik } from 'formik'
import { Draw } from './components/Draw'
import { Header } from './components/Header'

function App() {
  // const [isDraw, setIsDraw] = useState()
  // const formik = useFormik({
  //   initialValues: {
  //     color: 'black',
  //     range: 10
  //   },
  //   onSubmit: values => {
  //     console.log('submit')
  //     setIsDraw(true)
  //   },
  // })

  return (
    <div className="App">
      <Header />
      <Draw />
    </div>
  )
}

export default App
