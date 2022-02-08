import React from "react";
import Marquee from "react-fast-marquee";
import { TopSeven } from "../../utils/API/coinGecko";

export const Marque = (props) => {
  const [holder, setHolder] = React.useState([]);

  React.useEffect(() => {
    let myPromise = new Promise(function (myResolve, myReject) {
      const x = TopSeven();
      if (x) {
        myResolve(x);
      } else {
        myReject("error in promise");
      }
    });

    myPromise.then(
      function (value) {
        setHolder(value);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);
  //  props += holder;
  return (
    <>
      <Marquee
        style={{ backgroundColor: "black", opacity: ".94" }}
        gradient={false}
        gradientWidth="0px"
        pauseOnHover={true}
      >
        {holder.map((coin, i) => (
          <span
            id="marq"
            onClick={(e) => {
              e.preventDefault();
              alert("coming soon");
            }}
            key={coin.name}
          >
            <span
              key={coin.price}
              style={{ color: "white", padding: "18px" }}
            >{`| ${coin.name}:`}</span>
            <span key={coin.price} style={{ color: "white", padding: "18px" }}>
              ${`${coin.price1} |`}
            </span>
          </span>
        ))}
      </Marquee>
    </>
  );
};
