import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import About from './components/About/About'
import Shop from './components/Shop/Shop'
import Home from './components/Home/Home'
import Order from './components/Order/Order'
import { productAndCatrLoader } from './loader/productAndCatrLoader'
 
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
        path:'/about',
        element:<About></About>
      },
      {
        path:'/order',
        loader: productAndCatrLoader,
        element:<Order />
      },
      
      {
        path:'/shop',
        element:<Shop></Shop>,
        loader: ()=> fetch('products.json')
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
