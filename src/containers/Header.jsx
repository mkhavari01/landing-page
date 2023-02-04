import { v4 } from "uuid";
import { headerItems } from "assets";
import { useEffect, useRef, useState } from "react";
import Logo from "assets/logo-kardan.svg";
import LogoText from "assets/logo-kardan-text.svg";

const Header = () => {
  const menu = useRef(null);
  const btn = useRef(null);
  const btn2 = useRef(null);

  const [collapse, setCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [headerColor, setHeaderColor] = useState("transparent");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
      setHeaderColor("black");
    } else {
      setScroll(false);
      setHeaderColor("transparent");
    }
  };

  return (
    <header
      style={{
        backgroundColor: headerColor,
        transition: "background-color 0.5s ease-in-out",
      }}
      className={`navbar navbar-expand-lg  d-flex fixed-top bg-trnasparent pt-4 ${
        collapse ? "" : "bg-white pb-5"
      } ${scroll && collapse ? "bg-white" : ""} `}
    >
      <div className="container-fluid align-items-center">
        <a
          className="navbar-brand w-25 d-flex justify-content-center align-items-center mt-3"
          href="/"
        >
          <img src={Logo} alt="logo" />
          <img src={LogoText} alt="logo-text" />
        </a>
        <button
          className="navbar-toggler outline-none border-0 "
          style={{ outline: "none" }}
          type="button"
          onClick={() => setCollapse(!collapse)}
        >
          <span className="h1 border-0 p-4 curser-pointer font-gray outline-none font1">
            {collapse ? "☰" : "X"}
          </span>
        </button>
        <div
          className={`${
            collapse ? "collapse" : ""
          } navbar-collapse d-lg-flex flex-lg-row  pt-4 justify-content-center`}
          id="navbarNav"
          ref={menu}
        >
          <button
            className={`${
              collapse ? "d-none" : ""
            } me-5 my-3 btn btn-outline-warning border-gray font-gray fw-bolder special-btn py-2`}
            type="button"
            ref={btn}
          >
            شروع سرمایه گذاری۲
          </button>
          <ul className="navbar-nav ms-5">
            {headerItems.map((el) => (
              <div
                className={`d-grid gap-1 my-1 ${
                  collapse ? "" : "rounded bg-header-responsive my-2"
                }`}
                key={v4()}
              >
                <span
                  className={`${
                    collapse
                      ? `fw-bolder font-gray font3 ${
                          scroll ? "font-black text-dark" : ""
                        }`
                      : "fw-bolder font3"
                  } m-2 p-1 `}
                  type="button"
                >
                  {el.name}
                </span>
              </div>
            ))}
          </ul>

          <span
            className={`btn btn-outline-warning border-gray font-gray fw-bolder special-btn py-2 font3 ${
              collapse ? "" : "d-none"
            } ${scroll ? "font-black text-dark" : ""}`}
            type="button"
            ref={btn2}
          >
            شروع سرمایه گذاری
          </span>
        </div>
      </div>
    </header>
  );
};

export { Header };
