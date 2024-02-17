import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TarjetaLogin from './components/TarjetaLogin'
import FooterLogin from './components/FooterLogin'

function App() {
  /*   const [count, setCount] = useState(0) */

  return (
    <div>
      <div className="flex justify-center items-center h-lvh bg-gradient-to-b from-rose-100 to-teal-100">
        <TarjetaLogin></TarjetaLogin>
        <FooterLogin></FooterLogin>
      </div>
    </div>
  )
}

export default App
