import ProductsItem from "../app-products-item/app-products-item";
//react bootstrap
import {Container, Row, Col} from 'react-bootstrap';
const Products = ({data}) => {
    const products = data.map(product => {
        return(
            <Col style={{paddingBottom:'24px'}}>
                    <ProductsItem
                    key={product.id}
                    productName={product.name}
                    productPrice={product.price}/>
            </Col>
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