//react bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const ProductsItem = (props) => {
    return (
        <div className="d-flex justify-content-around">
            <Card style={{ width: '17.35rem' }}>
            <Card.Body>
                <Card.Title>{props.productName}</Card.Title>
                <Card.Text>
                      {props.productPrice}
                </Card.Text>
                <Stack direction="horizontal" gap={3}>
                    <Button variant="primary">В корзину</Button>
                    <Button variant="primary">Лайк</Button>
                </Stack>
            </Card.Body>
            </Card>
        </div>
    );
}

export default ProductsItem;