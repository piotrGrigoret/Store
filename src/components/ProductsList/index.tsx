import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux"
// import ProductCard from "../ProductCard"
import { fetchProducts, selectProducts} from "../../redux/slices/productsSlice";
import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Skeleton } from "@mui/material";
import { useLocation } from "react-router-dom";

export const ProductsList = () => {
  const location = useLocation();
  const dispath = useDispatch<AppDispatch>();
  const 
    {products, 
    loading, 
    error, 
    filteredProduct, 
    filterParam, 
    cart} = useSelector(selectProducts);

  useEffect(() => {
    dispath(fetchProducts());
  }, [dispath]);

  const ProductCard = lazy(() => import("../ProductCard"));

  if(location.pathname === "/cart"){
    console.log(cart);
    if(cart.length > 0){
      return(
        <div 
        className="grid grid-cols-1 max-w-[260px] min-h-[45vh] mx-auto gap-x-24 gap-y-10 sm:max-w-[660px] sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[100%]"
        >
          {cart.map((c) => (  
            <Suspense key={c.id} fallback={      
              <Skeleton variant="rectangular" sx={{background:'rgba(179, 86, 165, 0.2)', borderRadius:'10px'}} animation="wave" height={430}/>
              }
            >
              <ProductCard product={c} />
            </Suspense>
          ))}
        </div>
     )
    }else{
      return(
        <div className="flex flex-col justify-center items-center min-h-[55vh]">
          <img className="h-[300px]" src="/assets/svg/emptyCart.svg" alt="" />
          <h5 className="text-center font-medium text-base">Your cart is empty</h5>
        </div>
        )
    }
  }
  
  if( loading ==='idle' || loading === 'pending'){
    return(
      <div className="flex justify-center items-center min-h-[45vh]">
          <DotLottieReact className="w-96" src="assets/lottie/load.lottie" loop autoplay />
      </div>

    )
  }
  
  if(loading === 'failed'){
    return(
    <div className="flex justify-center flex-col gap-2 min-h-[45vh]">
        <img className="w-64 m-auto" src="/assets/svg/404Sign.svg" alt="" />
        <h5 className="text-red-500 text-center font-medium text-xs">{error ? error : "Error" }</h5>
    </div>
    )
  }  

  if(filterParam.searchObj.length > 0){
    if(filteredProduct.length > 0){
      return(
        <div 
        className="grid grid-cols-1 max-w-[260px] min-h-[45vh] mx-auto gap-x-24 gap-y-10 sm:max-w-[660px] sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[100%]"
        >
          {filteredProduct.map((p) => (
          <Suspense key={p.id} fallback={      
            <Skeleton variant="rectangular" sx={{background:'rgba(179, 86, 165, 0.2)', borderRadius:'10px'}} animation="wave" height={400}/>
          }>
            <ProductCard product={p} />
          </Suspense>
          ))}
        </div>
        )
    }else{
        return(
          <div className="flex flex-col justify-center items-center min-h-[55vh]">
            <img className="h-[300px]" src="/assets/svg/emptyCart.svg" alt="" />
            <h5 className="text-center font-medium text-base">
              No such product found
            </h5>
          </div>
        )
    } 
  }
  
  if(filteredProduct.length > 0){
    return(
      <div 
      className="grid grid-cols-1 max-w-[260px] min-h-[45vh] mx-auto gap-x-24 gap-y-10 sm:max-w-[660px] sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[100%]"
      >
        
        {filteredProduct.map((p) => (
        <Suspense key={p.id} fallback={      
          <Skeleton variant="rectangular" sx={{background:'rgba(179, 86, 165, 0.2)', borderRadius:'10px'}} animation="wave" height={400}/>
        }>
          <ProductCard product={p} />
        </Suspense>
        ))}
      </div>
      )
  }
  return (
    <div 
    className="grid grid-cols-1 max-w-[260px] min-h-[45vh] mx-auto gap-x-24 gap-y-10 sm:max-w-[660px] sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[100%]"
    >
      
      {products.map((p) => (
      <Suspense key={p.id} fallback={      
        <Skeleton variant="rectangular" sx={{background:'rgba(179, 86, 165, 0.2)', borderRadius:'10px'}} animation="wave" height={400}/>
      }>
        <ProductCard product={p} />
      </Suspense>
      ))}
    </div>
  )
  }
