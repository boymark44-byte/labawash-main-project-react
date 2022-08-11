import useFetch from "./useFetch";
import Shop from "./Shop";

const Detail = () => {
  const {data:blogs, error, isPending} = useFetch('http://127.0.0.1:8000/api/shops/');


  return ( 
  <>
    { error && <div>{error}</div> }
    {isPending && <div>Loading...</div>}
    { blogs && <Shop blogs={blogs} />}
  </> );
}
 
export default Detail;