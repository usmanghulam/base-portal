import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <div>
        <Link to='login'>Login</Link>
      </div>
      <div>
        {' '}
        <Link to='homepage'>Home Page</Link>
      </div>
    </div>
  )
}
