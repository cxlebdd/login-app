import React from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const handleLogin = (username: string, password: string) => {
    console.log('Iniciando sesión con:', { username, password });
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
  };

  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
}

export default App;
