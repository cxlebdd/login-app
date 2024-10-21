import React, { useState, FC } from 'react';
import { LoginFormProps } from '../types';

type LoginFormProps = {
  onSubmit: (username: string, password: string) => void;
};

const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 rounded-lg border-white/20">
      <div className="flex flex-col p-6">
        <h3 className="text-xl font-semibold leading-6 tracking-tighter">cxlebd - chk</h3>
        <p className="mt-1.5 text-sm font-medium text-white/50">
          Ingresa tu usuario y contraseña.
        </p>
      </div>
      <div className="p-6 pt-0">
        <form onSubmit={handleSubmit}>
          <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
            />
          </div>
          <div className="mt-4 group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
            <input
              type="password" // Cambia a tipo "password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <a className="text-sm font-medium text-foreground underline" href="/forgot-password">
              Olvidé mi contraseña
            </a>
          </div>
          <div className="mt-4 flex items-center justify-end gap-x-2">
            <a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2"
              href="/register">Registrarse</a>
            <button
              className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
              type="submit">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
