import { Button } from "antd"
import { useNavigate } from "react-router-dom"

const Home = () => {
     const navigate = useNavigate()
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
     <Button type="primary" onClick={() => navigate("/auth")}>Register</Button>
    </div>
  )
}

export default Home