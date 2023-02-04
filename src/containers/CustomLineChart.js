import React, { useEffect, useState } from "react";
import Loading from "../assets/Double Ring-1s-200px.gif";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 border-tooltip  bg-white">
        <ul className="list-style tex-center">
          <li className="l-height">
            <p className="font2 text-black">{label}</p>
          </li>
          <li className="l-height">
            <p className="color-dollar font2">{`دلار : ${payload[0].value}`}</p>
          </li>
          <li className="l-height">
            <p className="color-gold font2">{`طلا: ${payload[1].value}`}</p>
          </li>
          <li className="l-height">
            <p className="color-house font2">{`مسکن: ${payload[2].value}`}</p>
          </li>
          <li className="l-height">
            <p className="color-stoke font2">{`بورس :${payload[2].value}`}</p>
          </li>
        </ul>
      </div>
    );
  }

  return null;
};

const CustomLineChart = () => {
  const [dot, setDot] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://server.kardan.ir/api/v1/home/getHomeChart?year=10")
      .then((response) => {
        console.log("response is ", response);
        const newData = response.data.map((el) => {
          el.date = convertDate(el.date);
          return el;
        });
        setData(newData);
        setLoading(false);
      });
  }, []);

  function convertDate(str) {
    const dateElements = str.split("/");
    const year = parseInt(dateElements[0], 10);
    const month = parseInt(dateElements[1], 10) - 1;
    const day = parseInt(dateElements[2], 10);

    const date = new Date(year, month, day);
    const persianMonths = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    const persianMonth = persianMonths[date.getMonth()];

    return `${persianMonth} ${year}`;
  }

  return (
    <div className="container-fluid bg-stepsSection ">
      <div className="container-md">
        <h3 className="color-dark-blue font3 p-4 ">
          فراتر از بانک و اوراق درآمد ثابت حرکت کنید
        </h3>
        <div className="row justify-content-between p-4">
          <div className="col-12 col-md-6">
            <button className="badge bg-color-stoke border-0 rounded-4 p-3 m-2 box-shadow">
              بورس
            </button>
            <button className="badge bg-color-gold border-0 rounded-4 p-3 m-2 box-shadow">
              طلا
            </button>
            <button className="badge bg-color-dollar border-0 rounded-4 p-3 m-2 box-shadow">
              ارز
            </button>
            <button className="badge bg-color-house border-0 rounded-4 p-3 m-2 box-shadow">
              مسکن
            </button>
          </div>
          <div className="col-12 col-md-6 row">
            <div className="col-2 col-md-2 m-1">
              <button className="badge bg-box-year border-0 rounded-4 p-3 m-2 shadow-sm text-black-50">
                1 سال اخیر
              </button>
            </div>
            <div className="col-2 col-md-2 m-1">
              <button className="badge bg-box-year border-0 rounded-4 p-3 m-2 shadow-sm text-black-50">
                5 سال اخیر
              </button>
            </div>
            <div className="col-2 col-md-2 m-1">
              <button className="badge bg-box-year border-0 rounded-4 p-3 m-2 shadow-sm text-black-50">
                10 سال اخیر
              </button>
            </div>
            <div className="col-2 col-md-2 m-1">
              <button className="badge bg-box-year border-0 rounded-4 p-3 m-2 shadow-sm  text-black-50">
                15 سال اخیر
              </button>
            </div>
            <div className="col-2 col-md-2 m-1">
              <button className="badge bg-box-year border-0 rounded-4 p-3 m-2 shadow-sm  text-black-50">
                20 سال اخیر
              </button>
            </div>
          </div>
        </div>
        {loading ? (
          <div className="container-fluid text-center">
            <img src={Loading} className="w150-px" />
          </div>
        ) : (
          <div className="">
            <ResponsiveContainer
              width="100%"
              className="bg-stepsSection h-100vh"
            >
              <LineChart data={data}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="4 4"
                  opacity={1}
                />
                <XAxis dataKey="date" />
                <YAxis
                  style={{ padding: "20px" }}
                  axisLine={false}
                  tick={{ stroke: "none" }}
                  tickLine={false}
                  grid={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="dollar"
                  stroke="#E53535"
                  isAnimationActive={false}
                  onMouseEnter={(data, index) => {
                    setDot(true);
                  }}
                  onMouseLeave={() => {
                    setDot(false);
                  }}
                  dot={dot ? { visibility: true } : false}
                />
                <Line
                  type="monotone"
                  dataKey="gold"
                  stroke="#E5B700"
                  isAnimationActive={false}
                  onMouseEnter={(data, index) => {
                    setDot(true);
                  }}
                  onMouseLeave={() => {
                    setDot(false);
                  }}
                  dot={dot ? { visibility: true } : false}
                />
                <Line
                  type="monotone"
                  dataKey="house"
                  stroke="#05A560"
                  isAnimationActive={false}
                  onMouseEnter={(data, index) => {
                    setDot(true);
                  }}
                  onMouseLeave={() => {
                    setDot(false);
                  }}
                  dot={dot ? { visibility: true } : false}
                />
                <Line
                  type="monotone"
                  dataKey="stock"
                  stroke="#133780"
                  isAnimationActive={false}
                  onMouseEnter={(data, index) => {
                    setDot(true);
                  }}
                  onMouseLeave={() => {
                    setDot(false);
                  }}
                  dot={dot ? { visibility: true } : false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomLineChart;
