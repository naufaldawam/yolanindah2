import Hero from "../Components/KontenHome/Heros/Hero";
import About from "../Components/KontenHome/AboutUs/About";
import Feature from "../Components/KontenHome/Features/Feature";
import Service from "../Components/KontenHome/Services/Service";
import Client from "../Components/KontenHome/Clients/Client";

const Home = () => {
    return(
        <div>
            <Hero/>
            <Feature/>
            <About/>
            <Service/>
            <Client/>
        </div>
    )
};

export default Home;