import * as React from "react";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    expandIcon={
      <ExpandMoreIcon sx={{ fontSize: "1.75rem", color: "#133780" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255)",

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
  backgroundColor: "#FAFAFA",
}));

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="container-fluid bg-stepsSection ">
      <div className="container p-5 bg-stepsSection ">
        <h4 className="font3 color-dark-blue m-4">سوالات متداول</h4>
        <Accordion
          className="m-4"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            className="rounded-3 border-color-light-blue d-flex align-items-center"
          >
            <span className="badge h-25 badge-color-blue text-center badge-costume ms-4">
              1
            </span>
            <Typography className="font3 color-dark-blue p-md-2 p-0">
              نحوه سرمایه گذاری در صندوق جدید کاردان چگونه است؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="font2 color-light-gray">
              شما میتوانید از طریق وبسایت صندوق (www.kadabfund.ir) یا سامانه
              سرمایه گذاری کاردان (invest.kardan.ir) در صندوق ثبت نام کرده و
              واحدهای صندوق جدید کاردان را خریداری کنید. برای ثبت نام ورود کد
              ملی و شماره تلفن همراه کافی است.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="m-4"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            className="rounded-3 border-color-light-blue d-flex align-items-center"
          >
            <span className="badge h-25 badge-color-blue text-center badge-costume ms-4">
              2
            </span>
            <Typography className="font3 color-dark-blue p-md-2 p-0">
              حداقل مبلغ سرمایه گذاری چقدر است؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="font2 color-light-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="m-4"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            className="rounded-3 border-color-light-blue d-flex align-items-center"
          >
            <span className="badge h-25 badge-color-blue text-center badge-costume ms-4">
              3
            </span>
            <Typography className="font3 color-dark-blue p-md-2 p-0">
              سود صندوق آسمان سهند چقدر است؟ تقسیم سود دارد؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="font2 color-light-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="m-4"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
            className="rounded-3 border-color-light-blue d-flex align-items-center"
          >
            <span className="badge h-25 badge-color-blue text-center badge-costume ms-4">
              4
            </span>
            <Typography className="font3 color-dark-blue p-md-2 p-0">
              آیا می توان در هر زمان از صندوق خارج شد؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="font2 color-light-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="m-4"
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            aria-controls="panel5d-content"
            id="panel5d-header"
            className="rounded-3 border-color-light-blue d-flex align-items-center"
          >
            <span className="badge badge-color-blue text-center badge-costume ms-4">
              5
            </span>
            <Typography className="font3 color-dark-blue p-md-2 p-0">
              چگونه از اعتبار صندوق مطمئن شویم؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="font2 color-light-gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default CustomizedAccordions;
