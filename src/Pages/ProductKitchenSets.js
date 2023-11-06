import "../Components/KontenNavbar/Breadcumbscss/Breadcumb.css";
import { Container } from 'react-bootstrap';
import KitchenSet from "../Components/KontenNavbar/KitchenSets/KitchenSet";

const KitchenSetProduct = () => {
    return(
        <div>
            <div className="breadcrumbs">
                <Container>
                    <ol>
                        <li><a href="/">Home</a></li>
                        <li><a href="/service">Services</a></li>
                        <li>Kitchen Set</li>
                    </ol>
                    {/* <h2>halaman renov Rumah</h2> */}
                </Container>                
            </div>
        <KitchenSet/>
        </div>
    )
}

export default KitchenSetProduct;