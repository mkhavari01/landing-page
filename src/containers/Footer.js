import LogoText from "../assets/logo-kardan-text.svg";
import Logo from "../assets/logo-kardan.svg";
import { Icon } from "@iconify/react";
import scInstagram from "@iconify/icons-ei/sc-instagram";
import linkedinAlt from "@iconify/icons-uim/linkedin-alt";
import whatsappIcon from "@iconify/icons-la/whatsapp";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters={true} elevation={0} {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.75rem", color: "#fff" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#393944",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#393944",
}));

const Footer = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <footer className="container-fluid justify-content-center align-items-center bg-dark-gray">
      <div className="row d-none d-md-flex  justify-content-center align-items-center p-4">
        <div className="col-3">
          <div className="container align-items-center p-3">
            <img src={Logo} alt="Logo" /> <img src={LogoText} alt="LogoText" />
          </div>
          <ul className="list-style my-5">
            <li className="font1 text-white">
              کاردان آدرس:تهران،خیابان نلسون ماندلا،
            </li>
            <li className="font1 text-white">
              خیابان کاج آبادی،پلاک144،طبقه سوم
            </li>
            <li className="font1 text-white">تلفن:96621100-021</li>
            <li className="font1 text-white">ایمیل:info@kardan.ir</li>
          </ul>
        </div>
        <div className="col-2 d-flex flex-column justify-content-center align-items-start">
          <h5 className="font3 text-white">لینک ها</h5>
          <ul className="list-style px-0">
            <li className="font1 text-white">صندوق درآمد ثابت</li>
            <li className="font1 text-white">صندوق سهام بزرگ</li>
            <li className="font1 text-white">صندوق شاخصی</li>
            <li className="font1 text-white">تامین مالی</li>
            <li className="font1 text-white">ادغام و تملیک</li>
            <li className="font1 text-white">گزارش ها</li>
          </ul>
        </div>
        <div className="col-2 d-flex flex-column justify-content-center align-items-start">
          <h5 className="font3 text-white">لینک ها</h5>
          <ul className="list-style px-0">
            <li className="font1 text-white">صندوق درآمد ثابت</li>
            <li className="font1 text-white">صندوق سهام بزرگ</li>
            <li className="font1 text-white">صندوق شاخصی</li>
            <li className="font1 text-white">تامین مالی</li>
            <li className="font1 text-white">ادغام و تملیک</li>
            <li className="font1 text-white">گزارش ها</li>
          </ul>
        </div>
        <div className="col-4 d-flex flex-column ">
          <ul className="list-unstyled d-flex row justify-content-end">
            <div className="col-2">
              <li>
                <a href="https://www.instagram.com/">
                  <Icon icon={scInstagram} color="#dea71d" width="45" />
                </a>
              </li>
            </div>
            <div className="col-2">
              <li>
                <a href="https://www.whatsapp.com/">
                  <Icon icon={whatsappIcon} color="#dea71d" width="30" />
                </a>
              </li>
            </div>
            <div className="col-2">
              <li>
                <a href="https://www.linkedin.com/">
                  <Icon icon={linkedinAlt} color="#dea71d" width="30" />
                </a>
              </li>
            </div>
          </ul>
          <div className="d-flex justify-content-end">
            <div className="col-3 rounded-1 bg-light-gray box-footer-padding m-2"></div>
            <div className="col-3 rounded-1 bg-light-gray box-footer-padding m-2"></div>
            <div className="col-3 rounded-1 bg-light-gray box-footer-padding m-2"></div>
          </div>
        </div>
      </div>
      {/* responsive footer */}
      <div className="row d-lg-none justify-content-center align-items-center p-4">
        <div className="container">
          <img src={Logo} alt="Logo" /> <img src={LogoText} alt="LogoText" />
        </div>

        <div className="d-flex container row mt-4 mb-3">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className="d-flex align-items-center"
            >
              <Typography className="font3 text-white">
                لینک های متربط
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#393944" }}>
              <ul className="list-style px-0">
                <li className="font1 text-white">صندوق درآمد ثابت</li>
                <li className="font1 text-white">صندوق سهام بزرگ</li>
                <li className="font1 text-white">صندوق شاخصی</li>
                <li className="font1 text-white">تامین مالی</li>
                <li className="font1 text-white">ادغام و تملیک</li>
                <li className="font1 text-white">گزارش ها</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="d-flex container row ">
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              className="d-flex align-items-center"
            >
              <Typography className="font3 text-white">
                لینک های مفید
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#393944" }}>
              <ul className="list-style px-0">
                <li className="font1 text-white">صندوق درآمد ثابت</li>
                <li className="font1 text-white">صندوق سهام بزرگ</li>
                <li className="font1 text-white">صندوق شاخصی</li>
                <li className="font1 text-white">تامین مالی</li>
                <li className="font1 text-white">ادغام و تملیک</li>
                <li className="font1 text-white">گزارش ها</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="container row my-4 ">
          <p className="font2 text-white text-center">
            تهران، خیابان نلسون ماندلا، خیابان ظفر غربی پلاک ۲۸۱ کدپستی
            ۱۹۶۸۶۳۴۷۷۹
          </p>
        </div>

        <ul className="list-unstyled container row justify-content-center">
          <div className="col-2">
            <li className="text-center">
              <a href="https://www.instagram.com/">
                <Icon icon={scInstagram} color="#dea71d" width="45" />
              </a>
            </li>
          </div>
          <div className="col-2">
            <li className="text-center">
              <a href="https://www.whatsapp.com/">
                <Icon icon={whatsappIcon} color="#dea71d" width="30" />
              </a>
            </li>
          </div>
          <div className="col-2">
            <li className="text-center">
              <a href="https://www.linkedin.com/">
                <Icon icon={linkedinAlt} color="#dea71d" width="30" />
              </a>
            </li>
          </div>
        </ul>

        <div className="d-flex row justify-content-center">
          <div className="col-3 rounded-1 bg-light-gray box-footer-padding m-2"></div>
          <div className="col-3 rounded-1 bg-light-gray box-footer-padding m-2"></div>
          <div className="col-3 rounded-1 bg-light-gray box-footer-padding m-2"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
