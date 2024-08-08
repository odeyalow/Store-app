//react bootstrap
import Button from 'react-bootstrap/Button';

const ProductButton = (props) => {
    return (
      <>
        <Button 
        variant="light" 
        size='lg' 
        style={{
          fontWeight:'600',
        }}>
            {props.btnText}
        </Button>
      </>
    );
}

export default ProductButton;