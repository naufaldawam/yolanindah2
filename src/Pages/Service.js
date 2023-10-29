import BreadCrumbsComponents from "../Components/KontenService/Breadcumbs/BreadCrumbsComponents";
import AboutService from "../Components/KontenService/Services/Service";
// import Skill from "../Components/KontenService/Skills/Skill";


const Service = () => {
    return(
        <div>
            <BreadCrumbsComponents/>
            <AboutService/>
            {/* <Skill/> */}
        </div>
    )
};

export default Service;