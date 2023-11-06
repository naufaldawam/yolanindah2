import React, { useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import './Elementory.css';

// Import gambar secara terpisah
// import P1 from '../../../assets/img/product/product1.jpg';
// import P2 from '../../../assets/img/product/product2.jpg';
// import P3 from '../../../assets/img/product/product6.jpg';
// import P4 from '../../../assets/img/product/product8.jpg';
// import P5 from '../../../assets/img/product/product8.jpg';
// import P6 from '../../../assets/img/product/product6.jpg';
// import P7 from '../../../assets/img/product/product10.jpg';
// import P8 from '../../../assets/img/product/product8.jpg';
// import P9 from '../../../assets/img/product/product2.jpg';
// import P10 from '../../../assets/img/product/product10.jpg';
import D1 from '../../../assets/img/product/dekorasi1.jpg'
import D2 from '../../../assets/img/product/dekorasi2.jpg'
import K1 from '../../../assets/img/product/kanopi1.png'
import K2 from '../../../assets/img/product/kanopi2.jpg'
import K3 from '../../../assets/img/product/kanopi3.jpg'
import K4 from '../../../assets/img/product/kanopi4.jpg'
import K5 from '../../../assets/img/product/kanopi5.jpg'
import K6 from '../../../assets/img/product/kanopi6.jpg'
import L1 from '../../../assets/img/product/las1.jpg'
import L2 from '../../../assets/img/product/las2.jpg'
import LY1 from '../../../assets/img/product/lainnya1.jpg'
import LY2 from '../../../assets/img/product/lainnya2.jpg'
import LY3 from '../../../assets/img/product/lainnya3.jpg'
import P1 from '../../../assets/img/product/pagar1.png'
import P2 from '../../../assets/img/product/pagar2.png'
import P3 from '../../../assets/img/product/pagar3.jpg'
import P4 from '../../../assets/img/product/pagar4.jpg'
import P5 from '../../../assets/img/product/pagar5.jpg'
import RT1 from '../../../assets/img/product/reling1.png'
import RT2 from '../../../assets/img/product/reling2.jpg'
import RT3 from '../../../assets/img/product/reling3.jpg'
import RT4 from '../../../assets/img/product/reling4.jpg'
import RT5 from '../../../assets/img/product/reling5.jpg'
import RT6 from '../../../assets/img/product/reling6.jpg'
import RT7 from '../../../assets/img/product/reling7.jpg'
import RT8 from '../../../assets/img/product/reling8.jpg'
import RT9 from '../../../assets/img/product/reling9.jpg'
import RR1 from '../../../assets/img/product/renov1.jpg'
import RR2 from '../../../assets/img/product/renov2.jpg'
import RR3 from '../../../assets/img/product/renov3.jpg'
import RR4 from '../../../assets/img/product/renov4.jpg'
import RR5 from '../../../assets/img/product/renov5.jpg'
import RR6 from '../../../assets/img/product/renov6.jpg'

// Objek kategori
const categories = [
  { id: 'all', name: 'Semua' },
  { id: 'category1', name: 'Dekorasi' },
  { id: 'category2', name: 'Kanopi' },
  { id: 'category3', name: 'Kitchen Set' },
  { id: 'category4', name: 'Las' },
  { id: 'category5', name: 'Pagar' },
  { id: 'category6', name: 'Reling Tangga' },
  { id: 'category7', name: 'Renovasi Rumah' },
  { id: 'category8', name: 'Layanan Lainnya' },
  // { id: 'category8', name: 'Pintu Pagar Dan Reling Tangga Laser Cutting' },
  // { id: 'category9', name: 'Exterior Rumah' },
];
// console.log(categories[1].name)

// Objek gambar
const images = [
  // { id: 1, src: P1, category: 'all' },
  // { id: 2, src: P2, category: 'category1' },
  // { id: 3, src: P3, category: 'category2' },
  // { id: 4, src: P4, category: 'category1' },
  // { id: 5, src: P5, category: 'category2' },
  // { id: 6, src: P6, category: 'category1' },
  // { id: 7, src: P7, category: 'category1' },
  // { id: 8, src: P8, category: 'category2' },
  // { id: 9, src: P9, category: 'category2' },
  // { id: 10, src: P10, category: 'category2' },
  // { id: 1, category: 'all' },
  { id: 2, src: D1, category: 'category1' },
  { id: 3, src: D2, category: 'category1' },
  { id: 4, src: K1, category: 'category2' },
  { id: 5, src: K2, category: 'category2' },
  { id: 6, src: K3, category: 'category2' },
  { id: 7, src: K4, category: 'category2' },
  { id: 8, src: K5, category: 'category2' },
  { id: 9, src: K6, category: 'category2' },
  { id: 10, src: L1, category: 'category4' },
  { id: 11, src: L2, category: 'category4' },
  { id: 12, src: LY1, category: 'category4' },
  { id: 13, src: LY2, category: 'category4' },
  { id: 14, src: LY3, category: 'category4' },
  { id: 15, src: P1, category: 'category5' },
  { id: 16, src: P2, category: 'category5' },
  { id: 17, src: P3, category: 'category5' },
  { id: 18, src: P4, category: 'category5' },
  { id: 19, src: P5, category: 'category5' },
  { id: 20, src: RT1, category: 'category6' },
  { id: 21, src: RT2, category: 'category6' },
  { id: 22, src: RT3, category: 'category6' },
  { id: 23, src: RT4, category: 'category6' },
  { id: 24, src: RT5, category: 'category6' },
  { id: 25, src: RT6, category: 'category6' },
  { id: 26, src: RT7, category: 'category6' },
  { id: 27, src: RT8, category: 'category6' },
  { id: 28, src: RT9, category: 'category6' },
  { id: 29, src: RR1, category: 'category7' },
  { id: 30, src: RR2, category: 'category7' },
  { id: 31, src: RR3, category: 'category7' },
  { id: 32, src: RR4, category: 'category7' },
  { id: 33, src: RR5, category: 'category7' },
  { id: 34, src: RR6, category: 'category7' },
  // { id: 35, src: D1, category: 'all' },
  // { id: 36, src: D1, category: 'all' },
  // { id: 37, src: D1, category: 'all' },
  // { id: 38, src: D1, category: 'all' },
  // { id: 39, src: D1, category: 'all' },
];

function Elementory() {
  const [category, setCategory] = useState('all');

  const getCategoryName = (categoryId) => {
    const selectedCategory = categories.find((cat) => cat.id === categoryId);
    return selectedCategory ? selectedCategory.name : 'Tidak Diketahui';
  };

  const changeCategory = (newCategory) => {
    setCategory(newCategory === 'Semua' ? 'all' : newCategory);
  };

  const filteredImages = category === 'all' ? images : images.filter((image) => image.category === category);

  return (
    <Container>
      <div className="category-buttons">
        {categories.map((cat) => (
          <span
            key={cat.id}
            onClick={() => changeCategory(cat.id)}
            className={cat.id === category ? 'active' : ''}
          >
            {cat.name}
          </span>
        ))}
      </div>
      <Row xs={1} md={2} lg={3} className="g-4 mt-4" style={{ paddingBottom: '20px' }}>
        {filteredImages.map((image) => (
          <Card key={image.id}>
            <Card.Img variant="top" src={image.src} alt={`gambar ${image.id}`} loading="lazy" />
            <Card.Body>
              <Card.Title>Gambar Produk {getCategoryName(image.category)}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default Elementory;
