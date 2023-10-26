import BreadCrumbsComponents from "../Components/KontenAbout/Breadcumbs/BreadCrumbsComponents"
import AboutsContents from "../Components/KontenAbout/AboutUs/About"
import Counts from "../Components/KontenAbout/Counters/Counts";

const About = () => {
    return(
        <div>
            <BreadCrumbsComponents/>
            <AboutsContents/>
            <Counts/>
        </div>
    )
};

export default About;