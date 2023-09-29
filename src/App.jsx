import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginWithMockAPI from './pages/LoginWithMockAPI.jsx'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginWithMockAPI/>,
  },
]);

function App() {
  return (
    <div className="content">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
