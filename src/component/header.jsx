import { useState } from "react";
import { useRef } from "react";
import "./list";
const Header = () => {
  const [sticy, setSticy] = useState(" ");
  const [burger, setBurger] = useState(" ");
  const [overlay, setOverlay] = useState(" ");
  const [nav, setNav] = useState(" ");
  const [block, setBlock] = useState("none");
  const [target, setTarget] = useState(" ");

  const ref = useRef();
  const search = useRef();

  const scroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    if (scrollPosition > 30) {
      if (sticy == " ") {
        setSticy("sticky");
      }
    } else {
      setSticy(" ");
    }
  };
  window.addEventListener("scroll", scroll);

  function Hide() {
    search.current.style.display = "none";
  }
  function Open() {
    search.current.style.display = "block";
  }

  const click = () => {
    if (nav == " ") {
      setBurger("clicked");
      setOverlay("show");
      setNav("show");
      setBlock("block");
    } else {
      setBurger(" ");
      setOverlay(" ");
      setNav(" ");
      setBlock("none");
    }
  };
  const targetb = () => {
    if(target==" "){
      setTarget("-target");
    }else{
      setTarget(" ");
    }
  }
  return (
    <>
      <div className="search-container" ref={search} id="Hide">
        <div className="row-close">
          <img src="../img/logo.png" alt="logo" />
          <div className="close" onClick={Hide}>
            <i style={{ fontSize: "2rem" }} className="fa-solid fa-xmark">
            </i>
          </div>
        </div>
        <div className="search-row">
          <input
            type="text"
            placeholder="کلمه کلیدی خود را تایپ کرده و ظربه بزنید."
          />
          <label>
            <i
              className="fa fa-search"
              style={{ fontSize: "2rem", color: "#37393d" }}
            ></i>
          </label>
        </div>
      </div>
      <section id="Header">
        <div className="cont-header" id="to-up">
          <div className="top-header">
            <div className="top-liner">
              <div className="left-column">
                <div className="info">
                  <ul>
                    <li>
                      <i
                        className="fa fa-light fa-clock"
                        style={{ color: "#f57905" }}
                      ></i>
                      لورم ایپسوم متن ساختگی
                    </li>
                    <li>
                      <i
                        style={{ color: "#f57905" }}
                        className="fas fa-regular fa-location-dot"
                      ></i>
                      لورم ایپسوم متندگی
                    </li>
                    <li>
                      <a href="#">
                        <i
                          style={{ color: "#f57905" }}
                          className="fa fa-light fa-envelope"
                        ></i>
                        needhelp@info.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right-column">
                <em style={{ color: "aliceblue" }}>راه های ارتباطی:</em>
                <i
                  className="fa fa-brands fa-facebook-f"
                  style={{ color: "#f57905", margin: "0 10px" }}
                ></i>

                <i
                  className="fa fa-brands fa-linkedin"
                  style={{ color: "#f57905", margin: "0 10px" }}
                ></i>
                <i
                  className="fa fa-brands fa-twitter"
                  style={{ color: "#f57905", margin: "0 10px" }}
                ></i>
                <i
                  className="fa fab fa-pinterest-p"
                  style={{ color: "#f57905", margin: "0 10px" }}
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div className={`header ${sticy}`} id="navbar" ref={ref}>
          <div className="right-head-logo">
            <img src={require("../img/logo.png")} height={"60px"} alt="logo" />
            <i
              className="list fa fa-thin fa-bars"
              style={{
                margin: "1em",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: "none",
              }}
              onClick={click}
            ></i>
          </div>
          <div className="header-right">
            <div className="main-header">
              <div className="dropdown" href="#"></div>
              <ul>
                <li>
                  <a href="#">خانه</a>
                  <ul>
                    <li>صفحه ۱</li>
                    <li>صفحه ۲</li>
                    <li>صفحه۳</li>
                  </ul>
                </li>
                <li>
                  <a href="#">درباره ما</a>
                  <ul>
                    <li>صفحه ۱</li>
                    <li>صفحه ۲</li>
                    <li>صفحه۳</li>
                  </ul>
                </li>
                <li>
                  <a href="#">خدمات</a>
                  <ul>
                    <li>صفحه ۱</li>
                    <li>صفحه ۲</li>
                    <li>صفحه۳</li>
                  </ul>
                </li>
                <li>
                  <a href="#">صفحات</a>
                  <ul>
                    <li>صفحه ۱</li>
                    <li>صفحه ۲</li>
                    <li>صفحه۳</li>
                  </ul>
                </li>
                <li>
                  <a href="#">فروشگاه</a>
                  <ul>
                    <li>صفحه ۱</li>
                    <li>صفحه ۲</li>
                    <li>صفحه۳</li>
                  </ul>
                </li>
                <li>
                  <a href="#">پست ها</a>
                  <ul>
                    <li>صفحه ۱</li>
                    <li>صفحه ۲</li>
                    <li>صفحه۳</li>
                  </ul>
                </li>
                <li>
                  <a href="#">تماس با ما</a>
                </li>
              </ul>
            </div>
            <div className="header-left">
              <div>
                <a href="#" onClick={Open}>
                  <i
                    className="fa fa-search"
                    style={{ fontSize: "2rem", color: "" }}
                  ></i>
                </a>

                <div>
                  <button>وقت ملاقات</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="list-setion-cont">
        <div className="side-bar">
          <div className="head-list">
            <i
              style={{
                fontSize: "1rem",
                color: "#ffff",
                cursor: "pointer",
                transform: "rotate(45deg)",
              }}
              className="fa-solid fa-xmark"
            ></i>
            <img src={require("../img/logo-2.png")} alt="logo2" />
          </div>
        </div>
      </section>

      <div
        style={{ display: block }}
        onClick={click}
        className={`burger ${burger}`}
      >
        <span></span>
      </div>

      <nav className={nav}>
        <img src={require("../img/logo-2.png")} style={{marginTop:"-50px",marginBottom:"100px",marginRight:"50px"}} alt="" />
        <ul className="main nav-1">
          <li className="nav-item">
            <a className="nav-link" onClick={targetb} href="#0">
              خانه
            </a>
            <div id="profile" className={`nav-submenu`}>
              <a href="#" className="nav-submenu-link">
                post1
              </a>
              <a href="#" className="nav-submenu-link">
                post1
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#0">
              درباره ما
            </a>
            <div id="profile" className="nav-submenu">
              <a href="#" className="nav-submenu-link">
                post1
              </a>
              <a href="#" className="nav-submenu-link">
                post1
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#0">
              خدمات
            </a>
            <div id="profile" className="nav-submenu">
              <a href="#" className="nav-submenu-link">
                post1
              </a>
              <a href="#" className="nav-submenu-link">
                post1
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#0">
              صفحات
            </a>
            <div id="profile" className="nav-submenu">
              <a href="#" className="nav-submenu-link">
                post1
              </a>
              <a href="#" className="nav-submenu-link">
                post1
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#0">
             فروشگاه
            </a>
            <div id="profile" className="nav-submenu">
              <a href="#" className="nav-submenu-link">
                post1
              </a>
              <a href="#" className="nav-submenu-link">
                post1
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#0">
              بلاگ
            </a>
            <div id="profile" className="nav-submenu">
              <a href="#" className="nav-submenu-link">
                post1
              </a>
              <a href="#" className="nav-submenu-link">
                post1
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#0">
              ارتباط با ما
            </a>
            <div id="profile" className="nav-submenu">
              <a href="#" className="nav-submenu-link">
                post1
              </a>
              <a href="#" className="nav-submenu-link">
                post1
              </a>
            </div>
          </li>
        </ul>

        <div className="about">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>

        <div className="social"></div>
        <ul className="sub">
          <li>
            <a href="#0">فکت &amp; Shipping</a>
          </li>
          <li>
            <a href="#0">Terms &amp; Conditions</a>
          </li>
        </ul>
      <div>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-square-facebook"></i>
      </div>
        </div>
      </nav>
      <div onClick={click} className={`overlay  ${overlay}`}></div>
    </>
  );
};
export default Header;
