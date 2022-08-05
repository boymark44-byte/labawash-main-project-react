import Header from "./Header"
import Categories from "./Categories"
import FeaturedLaundryShops from "./FeaturedLaundryShops"
import LatestLaundryShops from "./LatestLaundryShops"
import Offer from "./Offer"
import Testimonials from "./Testimonials"
import Brands from "./Brands"


const Home = () => {
  return (
    <>
        <Header></Header>
        <Categories></Categories>
        <FeaturedLaundryShops></FeaturedLaundryShops>
        <LatestLaundryShops></LatestLaundryShops>
        <Offer></Offer>
        <Testimonials></Testimonials>
        <Brands></Brands>
    </>
  )
}

export default Home