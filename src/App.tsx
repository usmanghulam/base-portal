import './styles/style.scss'
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Loading } from './views/base'

/**
 * Containers
 */

const DefaultLayout = React.lazy(() =>
  import('./layout/DefaultLayout').then((module) => ({ default: module.default })),
)

/**
 * Pages
 */
const Login = React.lazy(() =>
  import('./views/pages/index').then((module) => ({ default: module.Login })),
)

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<DefaultLayout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
