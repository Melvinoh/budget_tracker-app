
import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Income from './components/Income'
import Expenses from './components/Expenses'
import { useGlobalContext } from './context/globalContext'

function App( ) {
  const [active, setactive] = useState(1)

  const {addIncome} = useGlobalContext()


  const displaydata = ( ) =>{
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Income />
      case 3:
        return <Expenses />
      case 4:
        return <Transactions />
      default: 
        return <Dashboard />
    }
  }

  return (
    <>
      <div className="app-container">
          <Navbar active={active} setactive={setactive}/>
          <div className="main">
            {displaydata()}
          </div>
         
      </div>
        
    </>
  )
}

export default App
