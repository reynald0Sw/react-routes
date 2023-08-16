import React from 'react'
import { useAuth } from './auth';
function ProfilePage() {
  const auth = useAuth();
  
  return (
      <div className="App">
      <header className="App-header">
        <h1>Perfil de Usuario {auth.user?.username}</h1>
        <p>welcome, {auth.user?.username}</p>
        <main className="Profile">
        <h2>Nombre de Usuario</h2>
        <p>Correo electrónico: usuario@example.com</p>
        <p>Ubicación: Ciudad, País</p>
      </main>
      </header>
      
    </div>
    
    
  )
}

export {ProfilePage};