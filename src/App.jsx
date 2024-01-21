import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import Home from './components/Home/Home'

function App() {
 
 const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/shop',
        element:<Shop></Shop>,
        loader: ()=> fetch('products.json')
      },
      {
        path:'/about',
        element:<About></About>
      },
    ]
    
  }
 ])
  return (
   <div>
    
    <RouterProvider router={router}></RouterProvider>

   </div>
  )
}

export default App
