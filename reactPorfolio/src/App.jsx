import React from 'react'
import Navigation from './Components/Navigation'
import './index.css'
import Layout from './Components/Layout'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Main from './Components/Main'

function App() {
  return (
   
   <div className='w-full h-screen bg-slate-300'>
   <Navigation/>
   <Main/>

   {/* // <Layout>
    //   <Router>
    //     <Routes> 
    //       <Route exact path='/' element={'<Main/>'}/>
    //       <Route exact path='/' element={'<CountryDetails/>'}/>
    //     </Routes>
    //   </Router>
    // </Layout> */}
   </div>
    
  )
}

export default App
