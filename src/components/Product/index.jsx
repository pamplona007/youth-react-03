import './styles.css'

const Product = ({ image, title, price, colors }) => {
    return (
        <div className="product">
            <img src={image} alt="product image" />
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
                {colors?.map((color) => (
                    <div 
                        className="color"
                        style={{
                            backgroundColor: color
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
} 

export default Product;