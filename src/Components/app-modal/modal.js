//components
import closeIcon from './assets/close-icon.svg';
//styles
import './modal-styles/modal.scss';

const Modal = (props) => {
    const open = props.isOpen ? 'block' : 'none'
    return(
        <div className="modal__container" style={{display:open}}>
            <div className="modal__block">
                <header className="modal__header">
                    <h2 className="modal__title">{props.name}</h2>
                    <img onClick={props.onModalClose()} src={closeIcon} alt="Close icon" className='header__close-icon' />
                </header>
                <p className="modal__text">
                    Здесь находятся товары которые вы добавили в {props.descr}
                </p>
                <div className="modal__body">
                </div>
            </div>
        </div>
    );
}

export default Modal;