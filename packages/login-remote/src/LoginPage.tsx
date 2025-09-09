
import React, { useState } from 'react';
import './LoginPage.css';

interface LoginPageProps {
  onLogin?: (name: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && onLogin) {
      onLogin(name.trim());
    }
  };
  
  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2 className="login-title">Olá, seja bem-vindo!</h2>
        <input
          type="text"
          placeholder="Digite o seu nome:"
          value={name}
          onChange={e => setName(e.target.value)}
          className="login-input"
          required
        />
        <button
          type="submit"
          className="login-button"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;