import React, { useState } from 'react';

interface CardProps {
  title: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  rating,
  reviews,
  location,
  description,
  tags,
  imageUrl
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.price}>${price}</p>
        <div style={styles.rating}>
          <span>{'★'.repeat(Math.floor(rating))}</span>
          <span style={styles.ratingText}>({rating} stars) • {reviews} reviews</span>
        </div>
        <p style={styles.location}>{location}</p>

        {/* Descripción visible y desplegable */}
        <p style={styles.description}>{isOpen ? description : description.substring(0, 100) + '...'}</p>

        {/* Botón para expandir o colapsar la descripción */}
        <button onClick={toggleDescription} style={styles.button}>
          {isOpen ? 'Ver menos' : 'Ver más'}
        </button>

        <div style={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} style={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '250px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover' as 'cover',
  },
  content: {
    padding: '16px',
  },
  title: {
    margin: '0 0 8px 0',
    fontSize: '18px',
    fontWeight: 'bold' as 'bold',
  },
  price: {
    fontSize: '16px',
    color: '#333',
    fontWeight: 'bold' as 'bold',
    margin: '0 0 8px 0',
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  ratingText: {
    marginLeft: '4px',
    fontSize: '14px',
    color: '#777',
  },
  location: {
    fontSize: '14px',
    color: '#777',
    marginBottom: '8px',
  },
  description: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '8px',
    transition: 'max-height 0.3s ease', // Suaviza la transición de apertura/cierre
  },
  tags: {
    display: 'flex',
    gap: '4px',
    marginBottom: '16px',
  },
  tag: {
    fontSize: '12px',
    padding: '4px 8px',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    color: '#333',
  },
  button: {
    width: '100%',
    padding: '8px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold' as 'bold',
  },
};

export default Card;


// <Card
// title="Casa Corral"
// price={55}
// rating={3.5}
// reviews={10}
// location="Recoleta, C.A.B.A"
// description="Mi querido hogar en Recoleta: el refugio perfecto para quien busca comodidad y calidez.Mi querido hogar en Recoleta: el refugio perfecto para quien busca comodidad y calidez, Mi querido hogar en Recoleta: el refugio perfecto para quien busca comodidad y calidez"
// tags={['2 amb', 'Temporal', 'Amueblado']}
// imageUrl="https://images.unsplash.com/photo-1609319172668-8b4f021f3b7b?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// />