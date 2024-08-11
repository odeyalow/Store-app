//components
import {Component} from "react";
import Search from "../app-search/search";
import ProductButton from "../app-products-button/products-button";
import Products from "../app-products/products";
import Filter from "../app-filter/filter";
import Modal from '../app-modal/modal'
//react bootstrap
import Stack from 'react-bootstrap/Stack';    
//styles
import './app-styles/app.scss';

class App extends Component {
   constructor(props){
    super(props);
    this.state = {
            data:[
                {name:"Product1", price: 100, isInCart:false, isInFavorites:false, id:1},
                {name:"Product1", price: 100, isInCart:false, isInFavorites:false, id:2},
                {name:"Product1", price: 100, isInCart:false, isInFavorites:false, id:3},
                {name:"Product1", price: 100, isInCart:false, isInFavorites:false, id:4},
                {name:"Product1", price: 100, isInCart:false, isInFavorites:false, id:5},
            ],
            buttonsData:[
                {id:"cart", text:"Корзина"},
                {id:"favorites", text:"Понравившиеся"}
            ],
            modal:{isOpen:false, name:'', descr:''}
        }
    } 

    onModalOpen = (id) => {
        this.setState(prevState => ({
            modal:{
                name: id === 'cart' ? 'Корзина' : 'Понравившиеся',
                descr: id === 'cart' ? 'корзину' : 'понравившиеся',
                isOpen:true
            }
        }))
    }
    onModalClose = () => {
        this.setState(prevState => ({
            modal:{
                ...prevState,
                isOpen:false
            }
        }))
    }

   render(){
    const {data, buttonsData, modal} = this.state;
    const buttons = buttonsData.map(button => {
        return(
            <ProductButton
            btnText={button.text}
            key={button.id}
            id={button.id}
            onModalOpen={this.onModalOpen}/>
        );
    })

    return (
        <div className="App">
            <h1 className="title"
            style={{
                padding:'48px 0 100px 0',
                fontSize:'55px',
                color:'white'
            }}>TECHNOSHOP</h1>
    
            <Stack  direction="horizontal" gap={3}>
                <Search/>
                {buttons}
            </Stack>
            
            <Stack direction="horizontal" style={{marginTop:'30px'}}>
                <Products data={data}/> 
                <Filter/>
            </Stack>
            <Modal 
            data={data}
            isOpen={modal.isOpen}
            onModalClose={() => this.onModalClose}
            name={modal.name}
            descr={modal.descr}/>
        </div>
       )
   }
}

export default App;