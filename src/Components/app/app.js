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
                { name: "Smartphone X", price: 899, isInCart: false, isInFavorites: false, id: 1, category: "Smartphones"},
                { name: "Laptop Pro", price: 1299, isInCart: false, isInFavorites: false, id: 2, category: "Laptops"},
                { name: "Wireless Headphones", price: 199, isInCart: false, isInFavorites: false, id: 3, category: "Audio"},
                { name: "Smartwatch Series 5", price: 349, isInCart: false, isInFavorites: false, id: 4, category: "Wearables"},
                { name: "4K Smart TV", price: 999, isInCart: false, isInFavorites: false, id: 5, category: "TVs"},
                { name: "Gaming Console Z", price: 499, isInCart: false, isInFavorites: false, id: 6, category: "Gaming"},
                { name: "Bluetooth Speaker", price: 149, isInCart: false, isInFavorites: false, id: 7, category: "Audio"},
                { name: "Tablet Air", price: 699, isInCart: false, isInFavorites: false, id: 8, category: "Tablets", },
                { name: "Portable Charger", price: 59, isInCart: false, isInFavorites: false, id: 9, category: "Accessories"},
                { name: "Smart Home Hub", price: 199, isInCart: false, isInFavorites: false, id: 10, category: "Smart Home"},
                { name: "Gaming Keyboard S", price: 149, isInCart: false, isInFavorites: false, id: 11, category: "Gaming"},
                { name: "Noise-Canceling Headphones", price: 299, isInCart: false, isInFavorites: false, id: 12, category: "Audio"},
                { name: "Smart Thermostat", price: 249, isInCart: false, isInFavorites: false, id: 13, category: "Smart Home"},
                { name: "Curved Gaming Monitor", price: 599, isInCart: false, isInFavorites: false, id: 14, category: "Monitors"},
                { name: "E-Reader Pro", price: 129, isInCart: false, isInFavorites: false, id: 15, category: "Tablets"},
                { name: "Wi-Fi Mesh System", price: 299, isInCart: false, isInFavorites: false, id: 16, category: "Networking"},
                { name: "Drone Camera X", price: 799, isInCart: false, isInFavorites: false, id: 17, category: "Cameras"}
            ],
            categoriesData: [
                // { name: "Все", value: "All" },
                { name: "Смартфоны", value: "Smartphones" },
                { name: "Ноутбуки", value: "Laptops" },
                { name: "Аудио", value: "Audio" },
                { name: "Носимые устройства", value: "Wearables" },
                { name: "Телевизоры", value: "TVs" },
                { name: "Игры", value: "Gaming" },
                { name: "Планшеты", value: "Tablets" },
                { name: "Аксессуары", value: "Accessories" },
                { name: "Умный дом", value: "Smart Home" },
                { name: "Мониторы", value: "Monitors" },
                { name: "Сети", value: "Networking" },
                { name: "Камеры", value: "Cameras" }
            ],            
            buttonsData:[
                {id:"cart", text:"Корзина"},
                {id:"favorites", text:"Понравившиеся"}
            ],
            modal:{isOpen:false, name:'', descr:'', modalData:''},
            searchValue:'',
            filters:{category:'all', priceFrom:0, priceTo:0},
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
        const addedProductName = this.state.data
            .filter(product => product.id === id)
            .map(product => product.name);

        alert(`Продукт ${addedProductName} был добавлен в корзину!`);
    }
    onFavoritesAdd = (id) => {
        this.setState(({data})=> ({    
            data: data.map(product => {
                return product.id === id ? {...product, isInFavorites:true} : product;
            })
        }))
        const addedProductName = this.state.data
            .filter(product => product.id === id)
            .map(product => product.name);

        alert(`Продукт ${addedProductName} был добавлен в понравившиеся!`);
    }
    onRemoveCart = (id) => {
        this.setState(({data})=> ({    
            data: data.map(product => {
                return product.id === id ? {...product, isInCart:false} : product;
            })
        }))
    }
    onRemoveFavorites = (id) => {
        this.setState(({data})=> ({    
            data: data.map(product => {
                return product.id === id ? {...product, isInFavorites:false} : product;
            })
        }))
    }
    onUpdateSearch = (searchValue) => {
        this.setState({searchValue})
    }
    searchProduct = (data, searchValue) => {
        if (searchValue.length === 0) {
            return data;
        }
        return data.filter(product => {
            return product.name.indexOf(searchValue) > -1
        })
    }
    onUpdateFilters = (state) => {
        let priceFrom = Number(state.priceFrom),
            priceTo = Number(state.priceTo);

        if(priceTo === 0){
            this.setState(() => ({
                filters:{
                    priceFrom:priceFrom, 
                    priceTo:priceTo, 
                    category:state.category
                }
            }))
            this.onApplyFilters();
        } else{
            if(priceFrom > priceTo){
                alert('Пожалуйста введите корректный диапазон цен!');
            }
        }
    }
    onApplyFilters = () => {
        const {category, priceFrom, priceTo} = this.state.filters;
        const {data} = this.state

        let filteredData = [...data];
        if (category !== 'all') {
            filteredData = filteredData.filter(product => product.category === category);
        }
        if (priceFrom !== 0 || priceTo !== 0) {
            filteredData = filteredData.filter(product => 
                product.price > priceFrom && (priceTo === 0 || product.price < priceTo)
            );
        }

        return filteredData;
    }
    

   render(){
    const {data, buttonsData, modal, categoriesData, searchValue} = this.state;
    let visibleData = this.onApplyFilters();
    visibleData = this.searchProduct(visibleData, searchValue);
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
            }}>STORE APP <span style={{color:'white', fontSize:'16px'}}>Version-1</span> </h1>
    
            <Stack  direction="horizontal" gap={3}>
                <Search
                onUpdateSearch={this.onUpdateSearch}/>
                {buttons}
            </Stack>
            <div className="titles__block" 
                style={{
                color:'#fff',
                display:'flex',
                justifyContent:'space-between',
                margin:'20px 0 5px'}}>
                <h4>Товары:</h4>
                <h4 style={{marginRight:'210px'}}>Фильтры:</h4>
            </div>
            <Stack direction="horizontal">
                <Products
                onDisableBtn={this.onDisableBtn}
                data={visibleData}
                onCartAdd={this.onCartAdd}
                onFavoritesAdd={this.onFavoritesAdd}/> 
                <Filter
                data={categoriesData}
                onUpdateFilters={this.onUpdateFilters}/>
            </Stack>
            <Modal 
            data={data}
            isOpen={modal.isOpen}
            onModalClose={() => this.onModalClose}
            name={modal.name}
            descr={modal.descr}
            modalData={modal.modalData}
            onRemoveCart={this.onRemoveCart}
            onFavoritesAdd={this.onRemoveFavorites}/>
        </div>
       )
   }
}

export default App;