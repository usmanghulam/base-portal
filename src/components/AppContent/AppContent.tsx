import React, { Suspense } from 'react'
import { Navigate, Route, Routes as Router } from 'react-router-dom'
import { Container } from '@mui/material'
import { Loading } from '../../views/base'
import Routes from '../../routes/routes'

const AppContent = () => {
  return (
    <Container maxWidth='lg'>
      <Suspense fallback={<Loading />}>
        <Router>
          {Routes.map((route, idx) => {
            return (
              route.element && <Route key={idx} path={route.path} element={<route.element />} />
            )
          })}
          <Route path='/' element={<Navigate to='homepage' replace />} />
        </Router>
      </Suspense>
    </Container>
  )
}

export default React.memo(AppContent)
