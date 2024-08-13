import { Button } from "antd";
import {DashboardTitle} from "../../../utils/index"
import { Link, } from "react-router-dom";

const Cars = () => {  

  return (
    <div>
      <div className="flex items-center justify-between">
      <DashboardTitle>Cars</DashboardTitle>
      <Link to={"/create-car"} >
        <Button type="primary">
        Create Cars
        </Button>
      </Link>
      </div>


    </div>
  )
}

export default Cars