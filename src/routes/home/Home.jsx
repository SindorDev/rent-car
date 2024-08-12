import Hero from "../../components/hero/Hero"
import Cards from "../../components/cards/Cards"
import Categories from "../../components/cateogires/Categories"
import { useGetCarsQuery } from "../../redux/api/cars-api"
const Home = () => {
   const {data, loading} = useGetCarsQuery()
  return (
    <>
      <Hero/>
      <Categories/>      
      <div className="my-24">
        <Cards data={data} loading={loading} title="Popular cars" className="grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4" link="/categories" slice={4}/>
      </div>
     <div className='my-24'>
      <Cards data={data} loading={loading} title="Recommended cars" className="grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4" link="/categories"/>
     </div>
    </>
  )
}

export default Home