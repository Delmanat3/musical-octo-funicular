import React from "react";
import { Search } from "../Search";
import { Carousel } from "../carousel/index";
const image = "/img/newCity.jpg";
const grass = "/img/back.jpg";

export const Jumbo = (props) => {
  const [isDesktop, setDesktop] = React.useState(window.innerWidth > 1100);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1100);
  };
  React.useEffect(()=>{
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  })
  return (
    <>
      <div id="Bg1" style={{ backgroundImage: `url(${image})` }}>
        <Search  />
      </div>

      {isDesktop ? (
        <Carousel sx={{ zIndex: "1" }} />
      ) : (
<coingecko-coin-compare-chart-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
        )}

      <div id="Bg2" style={{ backgroundImage: `url(${grass})` }}>
        
      </div>
    </>
  );
};
