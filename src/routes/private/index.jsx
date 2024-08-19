// import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useGetUserInfoQuery } from "../../redux/api/userInfo";
const Private = () => {
    //  const {token} = useSelector(state => state.auth)
     const {data} = useGetUserInfoQuery()
     return true ? 
     <div>
         <Outlet context={data}/>
     </div> 
     : 
     <Navigate to="/auth/" />
}

export default Private