import { useEffect, useState } from "react";
import { useParams } from "react-router"

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/products/' + productId);
        const responseJson = await response.json();

        setProduct(responseJson);
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <h1>Página do produto {product.title}</h1>
    )
}

export default Product;