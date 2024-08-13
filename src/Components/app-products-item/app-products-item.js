//react bootstrap
import {Button, Card, Stack} from 'react-bootstrap';

const ProductsItem = (props) => {
    const onCartAdd = (e) => {
        
        props.onCartAdd();
    }
    const onFavoritesAdd = (e) => {
        
        props.onFavoritesAdd();
    }

    return (
        <div className="d-flex justify-content-around" style={{paddingBottom:'24px'}}>
            <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>{props.productName}</Card.Title>
                <Card.Text>
                      {props.productPrice}$
                </Card.Text>
                <Stack direction="horizontal" gap={3}>
                    <Button
                    className='cardAddBtn'
                    variant="primary"
                    onClick={onCartAdd}>
                    В корзину</Button>
                    <Button 
                    className='favoritesAddBtn'
                    variant="primary"
                    onClick={onFavoritesAdd}>
                    Лайк</Button>
                </Stack>
            </Card.Body>
            </Card>
        </div>
    );
}

export default ProductsItem;