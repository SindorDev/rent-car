import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import Hero from "../../components/hero/Hero"
const Home = () => {
     const navigate = useNavigate()
  return (
    <>

<div className="w-full my-[50px] flex items-center justify-center">
     <Button type="primary" onClick={() => navigate("/auth")}>Register</Button>
</div>
      <Hero/>

    
    </>
  )
}

export default Home