import useFetch from "./useFetch";
import Shops from "./Shops";

const ShopHome = () => {

  const {data:blogs, isPending, error} = useFetch('http://127.0.0.1:8000/api/shops')
  return ( 
    <>
      { error && <div>{error}</div> }
      {isPending && <div>Loading...</div>}
      { blogs && <Shops blogs={blogs} />}
    </>
   );
}
 
export default ShopHome;