import { useRef } from "react";

const CountImg = () => {
  const ref = useRef() 
  window.addEventListener("scroll" , (event)=>{
    const scrollPosition = event.target.scrollingElement.scrollTop;
    ref.current.style.top = -(scrollPosition / 3) + "px";

  })
  return (
    <>
      <section id="heroSec">
        <div id="parallax">
          <div ref={ref} className="parallax-bg"></div>
          <div className="container">
            <div className="row justify-content-end">
              <div className="col-sm-4 promo">
                <div className="promo-block-divider">
                  <span style={{margin: "auto", width: "100%", textAlign: "center"}}>
                    <h2 style={{textAlign: "center"}} className="promo-block-title">
                      تماس با ما
                    </h2>
                    <a href="#">خانه</a>
                    <span> {" > "} تماس با ما </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CountImg;
