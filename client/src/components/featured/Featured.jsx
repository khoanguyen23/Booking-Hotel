import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { Link } from "react-router-dom";



const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london,Da Nang,Hồ Chí Minh"
  );
console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
          <Link to={`/hotels/${data._id}`}>
          
          
            <img
              src="https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="featuredImg"
            />
            </Link>
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1505018620898-92616e1849cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Da Nang</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1593887257411-bbcac9965c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ho Chi Minh</h1>
              <h2>{data[4]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[4]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[5]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;

