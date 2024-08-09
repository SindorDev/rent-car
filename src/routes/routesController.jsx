import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { SuspenseElement as Suspense } from "../utils/index"
const Menu = lazy(() => import("./auth/auth"))
const Login = lazy(() => import("./auth/login/Login"))
const Register = lazy(() => import("./auth/register/Register"))
const Home = lazy(() => import("./home/Home"))

const routesController = () => {
  return (
     <Routes>
          <Route path="/" element={<Suspense><Home/></Suspense>}/>
          <Route path="/auth" element={<Suspense><Menu/></Suspense>}>
               <Route path="" element={<Suspense><Login/></Suspense>}/>
               <Route path="register" element={<Suspense><Register/></Suspense>}/>
          </Route>
     </Routes>
  )
}

export default routesController