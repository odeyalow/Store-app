//react bootstrap
import Button from 'react-bootstrap/Button';

const ProductButton = (props) => {
    const {onModalOpen, id} = props;
    return (
      <>
        <Button 
        variant="light" 
        size='lg' 
        style={{
          fontWeight:'600',
        }}
        onClick={() => onModalOpen(id)}>
            {props.btnText}
        </Button>
      </>
    );
}

export default ProductButton;