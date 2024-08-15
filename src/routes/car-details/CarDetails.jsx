import { useParams } from "react-router-dom"
import { useGetDetailsCarMutation } from "../../redux/api/cars-api"
import { useEffect } from "react";
const CarDetails = () => {

  const [getDetailsCar, {data}] = useGetDetailsCarMutation()
  const {id} = useParams()

  useEffect(() => {
    getDetailsCar(id)
  }, [])

  return (
    <div>CarDetails</div>
  )
}

export default CarDetails