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
                { name: "Smartphone X", price: 899, isInCart: false, isInFavorites: false, id: 1 },
                { name: "Laptop Pro", price: 1299, isInCart: false, isInFavorites: false, id: 2 },
                { name: "Wireless Headphones", price: 199, isInCart: false, isInFavorites: false, id: 3 },
                { name: "Smartwatch Series 5", price: 349, isInCart: false, isInFavorites: false, id: 4 },
                { name: "4K Smart TV", price: 999, isInCart: false, isInFavorites: false, id: 5 },
                { name: "Gaming Console Z", price: 499, isInCart: false, isInFavorites: false, id: 6 },
                { name: "Bluetooth Speaker", price: 149, isInCart: false, isInFavorites: false, id: 7 },
                { name: "Tablet Air", price: 699, isInCart: false, isInFavorites: false, id: 8 },
                { name: "Portable Charger", price: 59, isInCart: false, isInFavorites: false, id: 9 },
                { name: "Smart Home Hub", price: 199, isInCart: false, isInFavorites: false, id: 10 },
                { name: "Gaming Keyboard S", price: 149, isInCart: false, isInFavorites: false, id: 11 }
            ],
            buttonsData:[
                {id:"cart", text:"Корзина"},
                {id:"favorites", text:"Понравившиеся"}
            ],
            modal:{isOpen:false, name:'', descr:'', modalData:''}
        }
    } 

    onModalOpen = (id) => {
        this.setState(() => ({
            modal:{
                name: id === 'cart' ? 'Корзина' : 'Понравившиеся',
                descr: id === 'cart' ? 'корзину' : 'понравившиеся',
                isOpen:true,
                modalData: id === 'cart' ? 'cartProducts' : 'favoriteProducts'
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
    onCartAdd = (id) => {
        this.setState(({data})=> ({    
            data: data.map(product => {
                return product.id === id ? {...product, isInCart:true} : product;
            })
        }))
    }
    onFavoritesAdd = (id) => {
        this.setState(({data})=> ({    
            data: data.map(product => {
                return product.id === id ? {...product, isInFavorites:true} : product;
            })
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
                <Products 
                data={data}
                onCartAdd={this.onCartAdd}
                onFavoritesAdd={this.onFavoritesAdd}/> 
                <Filter/>
            </Stack>
            <Modal 
            data={data}
            isOpen={modal.isOpen}
            onModalClose={() => this.onModalClose}
            name={modal.name}
            descr={modal.descr}
            modalData={modal.modalData}/>
        </div>
       )
   }
}

export default App;