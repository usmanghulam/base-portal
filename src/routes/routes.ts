import React from 'react'
import { IRoutes } from "../strict-typing";

/**
 * Pages | Components definition for Lazy Loading
 */

const Homepage = React.lazy(() =>
  import('../views/pages/index').then(({ Home }) => {
    return ({ default: Home });
  }),
)

/**
 * Routes registered against the Pages | Components
 */

const Routes: IRoutes[] = [
  { path: '/', exact: true, name: 'Homepage', element: Homepage },
]

export default Routes
