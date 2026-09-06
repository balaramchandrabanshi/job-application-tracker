import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import './App.css'


const App = () => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className="main">
        <Navbar />
      </div>
    </div>
    
  )
}

export default App

