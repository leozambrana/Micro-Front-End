import React, { useState } from 'react'
import './LoginPage.css'

const LoginPage = () => {
    const [state, setState] = useState(0)
  return (
    <div>
        <button
            id='login-button'
            className='btn btn-primary'
            onClick={() => setState(state + 1)}
        >
            Hello World 2: {state}
        </button>
    </div>
  )
}

export default LoginPage