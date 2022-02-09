// import { styled } from "@mui/material/styles";
import { Search } from "../Search";
const image = "/img/1.png";
const grass = "/img/back.jpg";

export const Jumbo = (props) => {
  return (
    <>
      <div id="Bg1" style={{ backgroundImage: `url(${image})` }}>
        <Search sx={{}} />
      </div>
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
      <div id="Bg2" style={{ backgroundImage: `url(${grass})` }}></div>
    </>
  );
};
