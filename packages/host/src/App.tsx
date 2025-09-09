import { useState } from 'react'
import './App.css'
import LoginPage from 'login-remote/LoginPage'

function App() {
  const [currentPage, setCurrentPage] = useState('login')
  const [userName, setUserName] = useState('')

  const handleLogin = (name: string) => {
    setUserName(name)
    setCurrentPage('customers')
  }

  const handleLogout = () => {
    setUserName('')
    setCurrentPage('login')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />
      case 'customers':
        return (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Listagem de Clientes</h1>
            <p>Bem-vindo, {userName}!</p>
            <div style={{ marginTop: '2rem' }}>
              <button 
                onClick={() => setCurrentPage('selected-customers')}
                style={{ margin: '0 1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
              >
                Ver Clientes Selecionados
              </button>
              <button 
                onClick={handleLogout}
                style={{ margin: '0 1rem', padding: '0.5rem 1rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
              >
                Logout
              </button>
            </div>
            <p style={{ marginTop: '2rem', color: '#666' }}>
              [Aqui será carregado o microfrontend de listagem de clientes]
            </p>
          </div>
        )
      case 'selected-customers':
        return (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Clientes Selecionados</h1>
            <p>Bem-vindo, {userName}!</p>
            <div style={{ marginTop: '2rem' }}>
              <button 
                onClick={() => setCurrentPage('customers')}
                style={{ margin: '0 1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
              >
                Voltar para Clientes
              </button>
              <button 
                onClick={handleLogout}
                style={{ margin: '0 1rem', padding: '0.5rem 1rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
              >
                Logout
              </button>
            </div>
            <p style={{ marginTop: '2rem', color: '#666' }}>
              [Aqui será carregado o microfrontend de clientes selecionados]
            </p>
          </div>
        )
      default:
        return <LoginPage onLogin={handleLogin} />
    }
  }

  return (
    <>
      {renderPage()}
    </>
  )
}

export default App
