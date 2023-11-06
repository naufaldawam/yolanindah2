import "../Components/KontenNavbar/Breadcumbscss/Breadcumb.css";
import { Container } from 'react-bootstrap';
import Canopy from "../Components/KontenNavbar/Canopys/Canopy";

const CanopysProduct = () => {
    return(
        <div>
            <div className="breadcrumbs">
                <Container>
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li><a href="/service">Services</a></li>
                        <li>Kanopi</li>
                    </ol>
                    {/* <h2>halaman renov Rumah</h2> */}
                </Container>                
            </div>
        <Canopy/>
        </div>
    )
}

export default CanopysProduct;