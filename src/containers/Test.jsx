import { useState } from "react";

const Test = () => {
  const [data, setData] = useState({
    src: "https://i.ibb.co/Tv32Zr3/image.png",
    detail: "بازداهی سالانه ",
    point: "۲۰٪ ",
  });
  return (
    <>
      <div className="bg-dark-blue">
        <section className="container-md py-5  d-flex flex-column justify-content-around align-items-center">
          <h2 className="text-white text-center">
            طرح مقایسه بین صندوق های درآمد ثابت جدید کاردان
          </h2>
          <div className="changer d-flex my-4">
            <div className="py-1 px-5 bg-white color-dark-blue font2 font16 w-50 text-center">
              صندوق جدید کاردان
            </div>
            <div className="py-1 px-5 text-white font2 font16 border border-1 w-50 text-center ">
              سپرده بانکی
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-around w-100">
            {Array.from({ length: 4 }, (_, i) => i + 1).map((el) => (
              <>
                <div className="mx-4 my-2 d-flex flex-column justify-content-around align-items-center ">
                  <img src={data.src} width="100px" alt="info-company" />
                  <span className="font16 font1 text-white">{data.detail}</span>

                  <span className="font16 font2 text-white">
                    {data.point}
                    <span>✓</span>
                  </span>
                </div>
              </>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export { Test };
