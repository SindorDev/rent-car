import { Carousel } from 'antd';
import bmw from "../../images/bmw.jpg"

const data = [
  {
    id: 1,
    name: 'BMW',
    image: bmw,
    color1: "red",
    color2: "black",
    model: "M5 F90",
  },
  {
    id: 2,
    name: 'BMW',
    image: bmw,
    color1: "red",
    color2: "black",
    model: "M5 F90",
  },
  {
    id: 3,
    name: 'BMW',
    image: bmw,
    color1: "red",
    color2: "black",
    model: "M5 F90",
  }
]

const Hero = () => (
<div className='mt-[150px]'>
<Carousel arrows autoplay infinite={true} dots={false}>
    {data.map((item) => (
      <div key={item.id} className="w-full !flex items-center justify-center min-h-screen relative ">
        <div className='relative h-full w-full'>
          <h2 className='text-black absolute top-[-450px] text-[200px] z-10 font-bold left-10' style={{background: `linear-gradient(to bottom,  ${item.color1} 0%, ${item.color2} 100%)`, toBottom: 0, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{item.model}</h2>
          <p className="text-[70px] ml-[52px] top-[-200px] font-bold text-black absolute z-10 " style={{background: `linear-gradient(to bottom,   ${item.color1} 0%, ${item.color2} 100%)`, toBottom: 0, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{item.name}</p>
        </div>
        <div className='absolute'>
          <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
        </div>
      </div>
    ))}
  </Carousel>
</div>
);

export default Hero;