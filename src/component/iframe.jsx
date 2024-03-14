import { useState } from "react";
const Iframe = () => {

  
  window.onscroll = function() {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  const [block , setBlock]= useState("none");
  const scroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if (scrollPosition > 200) {
      if (block == "none") {
        setBlock("block");
      }
    } else {
      setBlock("none");
    }
  };
  window.addEventListener("scroll", scroll);
  return (
    <>
      <div style={{ width: "100%", marginTop: "-20px" }}>
        <iframe
          width="100%"
          height="400"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            distance maps
          </a>
        </iframe>
      </div>
      <div className="btn-top" style={{display:block}}>
        <span className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </span>
        <a href="#to-up" > برو به بالا</a>
      </div>
    </>
  );
};
export default Iframe;
