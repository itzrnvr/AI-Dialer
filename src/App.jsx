import React from 'react'
import Auth from './pages/auth/auth'

const App = () => {
  return (
    <div>
      <Auth onAuthReq={(email, password) => console.log(email, password)}/>
    </div>
  )
}

export default App