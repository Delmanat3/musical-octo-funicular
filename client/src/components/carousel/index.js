import React from "react";
import { GET_NEWS } from "../../utils/API/backendless";

export const Carousel = () => {
  const [holdMe, setHoldMe] = React.useState([
    {
      i: "place",
    },
    {
      i: "place",
    },
  ]);
  React.useEffect(() => {
    let myPromise = new Promise(function (myResolve, myReject) {
      const newsContainer = GET_NEWS();
      console.log(newsContainer);

      myResolve(newsContainer);
      myReject(console.log("refetch for carousel"));
    });

    myPromise.then(
      function (value) {
        setHoldMe(value);
      },
      function (error) {
        console.error(error);
      }
    );
  }, []);
  console.log(holdMe);
  return (
    <div className="container">
      {/* <h1 className="main-heading">Responsive Carousel using CSS</h1> */}
      <div className="content">
        {/* <!-- The content which is placed at the center of the carousel --> */}
        {/* <div className="carousel-content">
				<h1 className="carousel-heading">
					GeeksforGeeks
				</h1>
				<h3>A computer science portal for geeks</h3>
			</div> */}
        <div className="slideshow">
          {/* <!-- carousel control buttons --> */}
          {/* <button className="slide-btn slide-btn-1"></button>
				<button className="slide-btn slide-btn-2"></button>
				<button className="slide-btn slide-btn-3"></button>
				<button className="slide-btn slide-btn-4"></button> */}
          {/* <!-- carousel wrapper which contains all images --> */}
          <div className="slideshow-wrapper">
            {holdMe.map((item) => (
              <div key={item.words} className="slide">
                <div
				key={item.snippet}

				> <small> <p>{item.section}</p></small>
					 <strong>{item.headline}</strong>
				<br/>
				{item.lead_paragraph} </div>
				
				<a href={item.url} >full article</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
