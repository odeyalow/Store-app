import {Component} from "react";
import Search from "../app-search/search";
import ProductButton from "../app-products-button/products-button";
import Products from "../app-products/products";
import Filter from "../app-filter/filter";
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
    }
   } 

   render(){
    const {data} = this.state;
    return (
        <div className="App">
            <h1 className="title"
            style={{
                padding:'48px 0 100px 0',
                fontSize:'55px',
                color:'white'
            }}>TECHNOSHOP</h1>
    
            <Stack direction="horizontal" gap={3}>
                <Search/>
                <ProductButton
                btnText='Корзина'/>
                <ProductButton 
                btnText='Понравившиеся'/>
            </Stack>
            
            <Stack direction="horizontal" style={{marginTop:'30px'}}>
                <Products data={data}/> 
                <Filter/>
            </Stack>
        </div>
       )
   }
}

export default App;