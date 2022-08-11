import {  AppContent } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      {/* <AppNavbar /> */}
      <div className='wrapper d-flex flex-column min-vh-100 bg-light'>
        {/* <AppHeader /> */}
        <div className='body flex-grow-1 px-3'>
          <AppContent />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  )
}

export default DefaultLayout
