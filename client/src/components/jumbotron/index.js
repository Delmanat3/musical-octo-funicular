import { styled } from "@mui/material/styles";
import { Search } from "../Search";
const image = "/img/1.png";
const grass = '/img/back.jpg'

const Bgimg1 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${image})`,
  minHeight: "300px",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  opacity: "0.65",
}));

export const Jumbo = (props) => {
  // const x='../components/super'
  // <Cards {...props}/>

  return (
    <>
     <div id="Bg1" style={{ backgroundImage: `url(${image})` }}>
      <Search sx={{}}/> 
       </div>
      <Bgimg1 />
      <div id="Bg2" style={{ backgroundImage: `url(${grass})` }} >
        
         </div>
    </>
  );
};
