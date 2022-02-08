import React from "react";
import Marquee from "react-fast-marquee";
import { TopSeven } from "../../utils/API/coinGecko";
import Skeleton from '@mui/material/Skeleton';

export const Marque = (props) => {
  const [holder, setHolder] = React.useState([]);
 let {loading=false}=props;

  React.useEffect(() => {
    let myPromise = new Promise(function (myResolve, myReject) {
      const x = TopSeven();
      loading=true
      if (x) {
        myResolve(x);

      } else {
        myReject("error in promise");
      }
    });

    myPromise.then(
      function (value) {
        setHolder(value);
        loading=false
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);
//  props += holder;
  props = loading;
console.log(props)
  return (
    <>
    {props.loading===true ? (

  <div style={{backgroundColor:"black",width:"100%vp",height:"20px"}}></div>
    ):(

      <Marquee
      style={{ backgroundColor: "black", opacity:".94" }}
      gradient={false}
      gradientWidth="0px"
      pauseOnHover={true}
    >
      {holder.map((coin, i) => (
         <span
         id="marq"
         onClick={((e)=>{
          e.preventDefault();
          alert("coming soon")
         })}  
         key={coin.name}
         >
          <span key={coin.price} style={{ color:"white",padding: "18px" }}>{`| ${coin.name}:`}</span>
          <span key={coin.price} style={{color:"white", padding: "18px" }}>${`${coin.price1} |`}</span>
       </span>
      ))}
    </Marquee>
    )}

    </>
  );
};
