/* eslint-disable react-hooks/rules-of-hooks */
import { lazy, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { SuspenseElement as Suspense } from "../utils/index"
import Footer from "../components/footer/Footer"

const Menu = lazy(() => import("./auth/auth"))
const Login = lazy(() => import("./auth/login/Login"))
const Register = lazy(() => import("./auth/register/Register"))
const Home = lazy(() => import("./home/Home"))
const Header = lazy(() => import("../components/header/Header"))
const Private = lazy(() => import("./private/index"))
const Dashboard = lazy(() => import("./dashboard/Dashboard"))
const Cars = lazy(() => import("./dashboard/cars/Cars"))
const Profile = lazy(() => import("./dashboard/profile/Profile"))
const Categories = lazy(() => import("./categories/Categories"))
const routesController = () => {
     const {pathName} = useLocation();

     useEffect(() => {
          window.scrollTo(0, 0)
     }, [pathName])

  return (
     <>
     
     <Routes>
          <Route element={<Header/>}>
          <Route path="/" element={<Suspense><Home/></Suspense>}/>
          <Route path="/dashboard" element={<Suspense> <Private /> </Suspense>}>
               <Route path="" element={<Suspense> <Dashboard/> </Suspense>}>
                    <Route path="cars" element={<Suspense> <Cars/> </Suspense>}/>
                    <Route path="profile" element={<Suspense> <Profile/> </Suspense>}/>
               </Route>
          </Route>
          <Route path="categories" element={<Suspense> <Categories/> </Suspense>}/>
          </Route>

          <Route path="/auth" element={<Suspense><Menu/></Suspense>}>
               <Route path="" element={<Suspense><Login/></Suspense>}/>
               <Route path="register" element={<Suspense><Register/></Suspense>}/>
          </Route>
     </Routes>
     <Footer/>
     </>
  )
}

export default routesController