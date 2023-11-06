import "../Components/KontenNavbar/Breadcumbscss/Breadcumb.css";
import { Container } from 'react-bootstrap';
import Welding from "../Components/KontenNavbar/Weldings/Welding";

const WeldingProduct = () => {
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
        <Welding/>
        </div>
    )
}

export default WeldingProduct;