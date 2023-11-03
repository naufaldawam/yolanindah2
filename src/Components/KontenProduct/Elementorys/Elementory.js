import React, { useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import './Elementory.css';

// Import gambar secara terpisah
import P1 from '../../../assets/img/product/product1.jpg';
import P2 from '../../../assets/img/product/product2.jpg';
import P3 from '../../../assets/img/product/product6.jpg';
import P4 from '../../../assets/img/product/product8.jpg';
import P5 from '../../../assets/img/product/product8.jpg';
import P6 from '../../../assets/img/product/product6.jpg';
import P7 from '../../../assets/img/product/product10.jpg';
import P8 from '../../../assets/img/product/product8.jpg';
import P9 from '../../../assets/img/product/product2.jpg';
import P10 from '../../../assets/img/product/product10.jpg';

// Objek kategori
const categories = [
  { id: 'all', name: 'Semua' },
  { id: 'category1', name: 'Jenis Kanopi' },
  { id: 'category2', name: 'Jenis Pintu' },
  { id: 'category3', name: 'Jenis Reling' },
  { id: 'category4', name: 'Pembuatan Menara' },
  { id: 'category5', name: 'Layanan Lainnya' },
  { id: 'category6', name: 'Layanan LainnyaII' },
  { id: 'category7', name: 'Project Konstruksi' },
  { id: 'category8', name: 'Pintu Pagar Dan Reling Tangga Laser Cutting' },
  { id: 'category9', name: 'Exterior Rumah' },
];

// Objek gambar
const images = [
  { id: 1, src: P1, category: 'all' },
  { id: 2, src: P2, category: 'category1' },
  { id: 3, src: P3, category: 'category2' },
  { id: 4, src: P4, category: 'category1' },
  { id: 5, src: P5, category: 'category2' },
  { id: 6, src: P6, category: 'category1' },
  { id: 7, src: P7, category: 'category1' },
  { id: 8, src: P8, category: 'category2' },
  { id: 9, src: P9, category: 'category2' },
  { id: 10, src: P10, category: 'category2' },
];

function Elementory() {
  const [category, setCategory] = useState('all');

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
              <Card.Title>Gambar Produk {image.id}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default Elementory;
