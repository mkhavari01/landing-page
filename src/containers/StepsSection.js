import Check from "../assets/check.png";
import Line from "../assets/line.png";
import LineReverse from "../assets/line-rev.png";

function StepsSection() {
  return (
    <section className="container-fluid bg-stepsSection ">
      <div className="container-md p-5">
        <div className="d-flex container row p-3  align-items-center ">
          <div className="col-12 col-md-6">
            <p className="font2 color-dark-blue">
              * سود انتظاری بر مبنای تجربه تامین سرمایه کاردان در مدیریت صندوق
              های با درآمد ثابت
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center col-md-6 justify-content-md-end">
            <button
              type="button"
              className="btn bg-dark-blue rounded-2 text-white px-7 box-shadow"
            >
              شروع سرمایه گذاری
            </button>
          </div>
        </div>
        <div className="container my-5">
          <h3 className="color-dark-blue font3">
            مراحل سرمایه گذاری در صندوق جدید کاردان
          </h3>
          <div className="d-flex flex-wrap justify-content-center">
            <div className=" col-md-2 text-center px-4">
              <img src={Check} alt="check" />
              <p className="color-dark-blue font3">مرحله اول</p>
              <p>ثبت نام در سامانه سجام و احراز هویت</p>
            </div>
            <div className="col-1 d-md-flex d-none text-center d-flex align-items-start justify-content-center mt-3">
              <img src={Line} alt="Line" className="line-img" />
            </div>
            <div className=" col-md-2 text-center px-4">
              <img src={Check} alt="check" />
              <p className="color-dark-blue font3">مرحله دوم</p>
              <p>ثبت نام در سایت صندوق جدید کاردان</p>
            </div>
            <div className="col-1 d-md-flex d-none text-center d-flex align-items-start justify-content-center mt-3">
              <img src={LineReverse} alt="Line" className="line-img" />
            </div>
            <div className=" col-md-2 text-center px-4">
              <img src={Check} alt="check" />
              <p className="color-dark-blue font3">مرحله سوم</p>
              <p>دریافت شناسه کاربری و رمز عبور</p>
            </div>
            <div className="col-1 d-md-flex d-none text-center d-flex align-items-start justify-content-center mt-3">
              <img src={Line} alt="Line" className="line-img" />
            </div>
            <div className=" col-md-2 text-center px-4">
              <img src={Check} alt="check" />
              <p className="color-dark-blue font3">مرحله چهارم</p>
              <p>ورود به سامانه آفلاین صندوق و شروع سرمایه گذاری</p>
            </div>
          </div>
        </div>
        <div className="container">
          <h4 className="font3 color-light-blue2">
            چگونه در صندوق جدید کاردان سرمایه گذاری کنم؟
          </h4>
          <p className="font2 color-dark-blue mt-4 text-align-justify">
            شما میتوانید از طریق وبسایت صندوق (www.kadabfund.ir) یا سامانه
            سرمایه گذاری کاردان (invest.kardan.ir) در صندوق ثبت نام کرده و
            واحدهای صندوق جدید کاردان را خریداری کنید. برای ثبت نام ورود کد ملی
            و شماره تلفن همراه کافی است.
          </p>
          <div className="container d-flex justify-content-end">
            <button
              type="button"
              className="btn bg-dark-blue rounded-2 text-white px-7 "
            >
              شروع سرمایه گذاری
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
