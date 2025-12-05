import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"

import MainPage from './mainPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<div className="min-h-screen w-full bg-fuchsia-100 flex items-center justify-center relative overflow-hidden">
        
      <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl"></div>
        
      <div className="absolute inset-0 bg-white/30 backdrop-blur-3xl"></div>

      <div className="relative z-10 w-full">
           <MainPage />
      </div>
  </div>
  </StrictMode>,
)