import HomeRenovation from "../Components/KontenNavbar/HomeRenovations/HomeRenovation";
import "../Components/KontenNavbar/Breadcumbscss/Breadcumb.css";
import { Container } from 'react-bootstrap';

const HomeRenov = () => {
    return(
        <div>
            <div className="breadcrumbs">
                <Container>
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li><a href="/service">Services</a></li>
                        <li>Renov Rumah</li>
                    </ol>
                    <h2>halaman Rumah</h2>
                </Container>                
            </div>
        <HomeRenovation/>
        </div>
    )
}

export default HomeRenov;