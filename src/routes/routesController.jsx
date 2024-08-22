/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import { lazy, useEffect } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { SuspenseElement as Suspense } from "../utils/index"
import { useSelector } from "react-redux"

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
const CreateCar = lazy(() => import("../components/create-modal/CreateComponent"))
const CarDetails = lazy(() => import("./car-details/CarDetails"))
const Verify = lazy(() => import("./verify/Verify"))
const Users = lazy(() => import("./dashboard/users/Users"))
const Update = lazy(() => import("../components/create-modal/CreateComponent"))
const Empty = lazy(() => import("./found/notFound"))
const Category = lazy(() => import("./dashboard/category/Category"))
const Reimburse = lazy(() => import("./dashboard/reimburse/Reimburse"))
const Search = lazy(() => import("./search/Search"))
const routesController = () => {
     const {pathname} = useLocation();
     const {token} = useSelector(state => state.auth)
     const {user} = useSelector(state => state.auth)
     useEffect(() => {
          window.scrollTo(0, 0)
     }, [pathname])
  return (
     <>
     
     <Routes>
          <Route element={<Header/>}>
          <Route path="" element={<Suspense><Home/></Suspense>}/>
          <Route path="dashboard" element={<Suspense> <Private /> </Suspense>}>
               <Route path="" element={<Suspense> <Dashboard/> </Suspense>}>
                    <Route path="cars" element={user?.role === "admin" ? <Suspense> <Cars/> </Suspense> : <Navigate to={"/dashboard"}/>}/>
                    <Route path="category" element={user?.role === "admin" ? <Suspense> <Category/> </Suspense> : <Navigate to={"/dashboard"}/>}/>
                    <Route path="users" element={ user?.role === "admin" ? <Suspense> <Users/> </Suspense> : <Navigate to={"/dashboard"}/>}/>
                    <Route path="profile" element={ <Suspense> <Profile/> </Suspense> }/>
                    <Route path="reimburse" element={ <Suspense> <Reimburse/> </Suspense> }/>
               </Route>
          </Route>
          <Route path="categories" element={<Suspense> <Categories/> </Suspense>}/>
          <Route path="/create-car" element={<Suspense><CreateCar/></Suspense>}/>
          <Route path="/edit/" element={<Suspense><Update/></Suspense>}/>
          <Route path="/details/:id" element={<Suspense><CarDetails/></Suspense>}/>
          <Route path="/search" element={<Suspense><Search/></Suspense>}/>
          </Route>

          <Route path="auth" element={token ? <Navigate to={"/dashboard"}/> : <Suspense><Menu/></Suspense>}>
               <Route path="" element={<Suspense><Login/></Suspense>}/>
               <Route path="register" element={<Suspense><Register/></Suspense>}/>
               <Route path="verify/" element={<Suspense><Verify/></Suspense>}/>
          </Route>
          <Route path="*" element={<Suspense> <Empty/> </Suspense>}/>
     </Routes>
     </>
  )
}

export default routesController