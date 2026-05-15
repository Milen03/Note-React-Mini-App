import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NotesSection from './components/NotesSection'

function App() {

   return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 flex">

      {/* Sidebar */}
      
      {/* Notes Section */}
     <NotesSection/>
   </div>
  )
}

 

export default App
