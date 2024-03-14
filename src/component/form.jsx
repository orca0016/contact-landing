const Form = () => {
  return (
    <>
      <section className="section-form">
        <div className="row">
          <div className="col-right">
            <h2>در تماس باشید</h2>
            <p>
              با ما تماس بگیرید یا هر زمان که خواستید تماس بگیرید، ما در عرض 24
              ساعت به تمام سوالات پاسخ می دهیم.
            </p>
            <p>Modesto, 629 12th St, CA 95354 ایالات متحده</p>
            <a href="#">infomain@gmail.com</a>
            <h3>+1 (230)-456-155-23</h3>
          </div>
          <div className="col-left">
            <form>
              <div className="row-form">
                <input type="text" placeholder="اسم خود را وارد کنید." />
                <input type="text" placeholder="ایمیل خود را وارد کنید" />
              </div>
              <div className="row-form">
                <input type="text" placeholder="تلفن" style={{width: '100%'}} />
              </div>
              <div className="row-form">
                <textarea
                  placeholder="پیغال خود را  وارد کنید"
                  cols="90"
                  rows="10"
                ></textarea>
              </div>
              <div className="row-form">
                <input type="checkbox" />
                <label>
                  من موافقت می کنم که داده های ارسالی من جمع آوری و ذخیره می
                  شود. *
                </label>
              </div>
              <div className="row-form">
                <div>
                  <button>پیام رو ارسال کن {">"}</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <main>
          <div>
            <h2>مشترک شدن در خبرنامه ما</h2>
            <input type="text" placeholder="ادرس ایمیل خود را وارد کنید" />
            <button>اکنون مشترک شوید {">"}</button>
          </div>
        </main>
      </section>
    </>
  );
};

export default Form;
