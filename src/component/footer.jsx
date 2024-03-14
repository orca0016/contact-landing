import logo from "../img/logo.png"
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="row">
          <div className="col">
            <h2>
              <img src={logo} alt="logo-footer" />
            </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className="col links">
            <h2>پیوندها</h2>
            <ul>
              <li>
                <a href="#"> درباره </a>
              </li>
              <li>
                <a href="#"> خدمات </a>
              </li>
              <li>
                <a href="#"> شغل ها </a>
              </li>
              <li>
                <a href="#"> فرصت ها </a>
              </li>
              <li>
                <a href="#"> محل </a>
              </li>
              <li>
                <a href="#"> مقاله </a>
              </li>
            </ul>
          </div>
          <div className="col links">
            <h2>خدمات</h2>
            <ul>
              <li>
                <a href="#"> درباره </a>
              </li>
              <li>
                <a href="#"> خدمات </a>
              </li>
              <li>
                <a href="#"> شغل ها </a>
              </li>
              <li>
                <a href="#"> فرصت ها </a>
              </li>
              <li>
                <a href="#"> محل </a>
              </li>
              <li>
                <a href="#"> مقاله </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>مخاطب</h2>
            <p style={{width: "15em"}}>
              Flat 20، Reynolds Neck، North Helenaville، FV77 8WS
            </p>
            <p>
              <a href="#">+2(305) 587-3407</a>
            </p>
            <p>
              <a href="#">sample@example.com</a>
            </p>
          </div>
        </div>
        <div className="row-button">
          <div className="row-buttom-footer">
            <span>
              <a href="#">Easton</a>© 2022 All Right Reserved
            </span>
            <span>
              <ul>
                <li>
                  <a href="#">شرایط استفاده از خدمات</a>
                </li>
                <li>
                  <a href="#">سیاست حفظ حریم خصوصی</a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer ;
