import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ProtectedRoute from './components/Helper/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login/Login'
import NotFound from './components/NotFound'
import Photo from './components/Photo/Photo'
import User from './components/User/User'
import UserProfile from './components/User/UserProfile'
import { UseStorage } from './UserContext'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <UseStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <Route
                path='conta/*'
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path='foto/:id' element={<Photo />} />
              <Route path='perfil/:user' element={<UserProfile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UseStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
