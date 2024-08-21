import { Link } from "react-router-dom"
import found from "../../images/404-found.webp"
const notFound = () => {
  return (
    <section className="w-full min-h-screen bg-gray-500">
      <div>
        <div className="flex flex-col gap-5 items-center pt-[100px] justify-center">
        <img src={found} alt="404 not found" />
      <h2 className="text-3xl font-bold">Page Not Found</h2>
      <p className="text-lg font-semibold text-center">This page does not exist or was removed! We suggest you go back to the Home page.</p>
        <Link to={"/"} className="bg-black text-white py-3 rounded-xl text-[16px] font-bold px-5 outline-none">Back to Home</Link>
        </div>
      </div>

    </section>
  )
}

export default notFound