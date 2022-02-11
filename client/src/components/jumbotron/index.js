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
        <div
          id="Bg3"
          style={{
            backgroundImage: `url(${image})`,
            minHeight: "300px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: "0.65",
          }}
        ></div>
      )}

      <div id="Bg2" style={{ backgroundImage: `url(${grass})` }}></div>
    </>
  );
};
