declare module 'login-remote/LoginPage' {
  import { ComponentType } from 'react'
  const LoginPage: ComponentType<Record<string, unknown>>
  export default LoginPage
}

// Declaração genérica para outros componentes remotos do login-remote
declare module 'login-remote/*' {
  const component: ComponentType<Record<string, unknown>>
  export default component
}
