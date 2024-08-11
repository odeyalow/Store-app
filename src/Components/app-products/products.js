//components
import ProductsItem from "../app-products-item/app-products-item";
//react bootstrap
import {Container, Row} from 'react-bootstrap';

const Products = ({data, onCartAdd, onFavoritesAdd}) => {
    const products = data.map(product => {
        return(
            <ProductsItem
                key={product.id}
                productName={product.name}
                productPrice={product.price}
                onCartAdd={() => onCartAdd(product.id)}
                onFavoritesAdd={() => onFavoritesAdd(product.id)}/>
        )
    })
    return(    
        <Container style={{padding: '0 17px 0 0'}}>
            <Row sm={1} lg={2} xl={3}>
                {products}
            </Row>
        </Container>
    );
}

export default Products;