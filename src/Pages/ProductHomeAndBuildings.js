import "../Components/KontenNavbar/Breadcumbscss/Breadcumb.css";
import { Container } from 'react-bootstrap';
import HomeAndBuilding from "../Components/KontenNavbar/HomeAndBuildingRenovations/HomeAndBuildingRenovation";

const HomeAndBuildingProduct = () => {
    return(
        <div>
            <div className="breadcrumbs">
                <Container>
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li><a href="/service">Services</a></li>
                        <li>Las</li>
                    </ol>
                    {/* <h2>halaman renov Rumah</h2> */}
                </Container>                
            </div>
        <HomeAndBuilding/>
        </div>
    )
}

export default HomeAndBuildingProduct;