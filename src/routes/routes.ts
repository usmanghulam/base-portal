import React from 'react'

/**
 * Pages | Components definition for Lazy Loading
 */

const LoginPage = React.lazy(() =>
  import('../views/pages/index').then(({ Login }) => ({ default: Login })),
)

/**
 * Routes registered against the Pages | Components
 */

const Routes = [
  {
    path: '/login',
    exact: true,
    name: LoginPage,
  },
]

export default Routes
