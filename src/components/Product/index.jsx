import { useState } from 'react'
import './styles.css'
import { Link } from 'react-router';

const ProductCard = ({ id, images, title, price, colors }) => {
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const selectedImage = images[selectedColorIndex];

    return (
        <Link to={`/${id}`} className="product">
            <img src={selectedImage} alt={`image ${selectedColorIndex + 1}`} />
            <div className="title">
                {title}
            </div>
            <div className="price">
                {price?.toLocaleString('pt-BR', { 
                    style: 'currency', 
                    currency: 'BRL' 
                })}
            </div>
            <div className="colors">
                {colors?.map((color, index) => (
                    <div 
                        className="color"
                        style={{
                            backgroundColor: color,
                            outlineColor: selectedColorIndex === index 
                                ? 'red'
                                : 'transparent',
                            outlineWidth: '1px',
                            outlineStyle: 'solid',
                            outlineOffset: '2px' 
                        }}
                        onMouseEnter={() => setSelectedColorIndex(index)}
                    ></div>
                ))}
            </div>
        </Link>
    )
} 

export default ProductCard;