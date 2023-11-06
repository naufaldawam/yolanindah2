import "../Components/KontenNavbar/Breadcumbscss/Breadcumb.css";
import { Container } from 'react-bootstrap';
import StarRailing from "../Components/KontenNavbar/StarRailings/StarRailing";

const StarRailingProduct = () => {
    return(
        <div>
            <div className="breadcrumbs">
                <Container>
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li><a href="/service">Services</a></li>
                        <li>Reling Dan Tangga</li>
                    </ol>
                    {/* <h2>halaman renov Rumah</h2> */}
                </Container>                
            </div>
        <StarRailing/>
        </div>
    )
}

export default StarRailingProduct;