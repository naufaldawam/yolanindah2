import BreadCrumbsComponents from "../Components/KontenAbout/Breadcumbs/BreadCrumbsComponents"
import AboutsContents from "../Components/KontenAbout/AboutUs/AboutsContents"
import Counts from "../Components/KontenAbout/Counters/Counts";
import Client from "../Components/KontenHome/Clients/Client";

const About = () => {
    return(
        <div>
            <BreadCrumbsComponents/>
            <AboutsContents/>
            <Counts/>
            <Client/>
        </div>
    )
};

export default About;