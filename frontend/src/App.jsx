import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import AcademicCurator from './pages/Home'
import Search from './pages/Search'

import { Routes, Route } from "react-router-dom";
import OwnerDashboard from './pages/OwnerDashboard'
import MyAccount from './pages/MyAccount'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <Routes>
      <Route path="/" element={<AcademicCurator />} />
      <Route path="/search" element={<Search />} />
      <Route path="/owners" element={<OwnerDashboard/>}/>
         <Route path="/account" element={<MyAccount/>}/>
      
    </Routes>
      </div>
    </>
  )
}

export default App
