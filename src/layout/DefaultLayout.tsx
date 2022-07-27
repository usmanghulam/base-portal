import { AppSidebar, AppHeader } from '../components/index'
import { Link } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
      <Link to='login'>Login</Link>
      <AppSidebar />
      <div>
        <AppHeader />
      </div>
    </div>
  )
}

export default DefaultLayout
