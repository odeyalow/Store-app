//components
import closeIcon from './assets/close-icon.svg';
//styles
import './modal-styles/modal.scss';
//react bootstrap
import {Card, Button} from 'react-bootstrap';

const Modal = ({data, isOpen, name, onModalClose, descr, modalData, onRemoveCart, onRemoveFavorites}) => {
    const open = isOpen ? 'block' : 'none';

    let cardProducts = [];

    const loadProducts = (product) => {
        return(
            <div className="d-flex justify-content-around" style={{paddingBottom:'24px'}}>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.price}$
                        </Card.Text>
                        <Button
                        className='cardAddBtn'
                        variant="primary"
                        onClick={() => name === 'Корзина' ? onRemoveCart(product.id) : onRemoveFavorites(product.id)}>
                        Убрать из {name === 'Корзина' ? 'корзины' : 'понравившихся'}
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    if (modalData === 'cartProducts') {
        cardProducts = data
            .filter(product => product.isInCart === true)
            .map(product => loadProducts(product));
    } else {
        cardProducts = data
            .filter(product => product.isInFavorites === true)
            .map(product => loadProducts(product));
    }    

    return(
        <div className="modal__container" style={{display:open}}>
            <div className="modal__block">
                <header className="modal__header">
                    <h2 className="modal__title">{name}</h2>
                    <img onClick={onModalClose()} src={closeIcon} alt="Close icon" className='header__close-icon' />
                </header>
                <p className="modal__text">
                    Здесь находятся товары которые вы добавили в {descr}
                </p>
                <div className="modal__body">
                    {cardProducts}
                </div>
            </div>
        </div>
    );
}

export default Modal;