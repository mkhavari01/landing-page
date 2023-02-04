import "./App.css";
import { Header,Test } from "containers";
import { Description } from "containers/Description";
import StepsSection from "containers/StepsSection";
import CustomizedAccordions  from "containers/CustomizedAccordions "
import ContactSection from "containers/ContactSection";
import ExperimentSection from "containers/ExperimentSection";
import VideoSection from "containers/VideoSection";
import Footer from "containers/Footer";
import CustomLineChart from "containers/CustomLineChart";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Test />
      <StepsSection />
      <VideoSection />
      <CustomLineChart />
      <ExperimentSection />
      <CustomizedAccordions />
      <ContactSection />
      <Footer/>
    </div>
  );
}

export default App;
