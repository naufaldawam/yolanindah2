import About from "../Components/KontenHome/AboutUs/About";
import Feature from "../Components/KontenHome/Features/Feature";
import Service from "../Components/KontenHome/Services/Service";
// import Client from "../Components/KontenHome/Clients/Client";
import HeroCarousel from "../Components/KontenHome/Carousels/HeroCarousel";
// import ClientsPagination from "../Components/KontenHome/ClientsPaginations/ClientsPagination";

const Home = () => {
    return(
        <div>
            <HeroCarousel/>
            <Feature/>
            <About/>
            <Service/>
            {/* <Client/> */}
            {/* <ClientsPagination/> */}
        </div>
    )
};

export default Home;