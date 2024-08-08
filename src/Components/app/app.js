import Search from "../app-search/search";
import ProductButton from "../app-products-button/products-button";
import Products from "../app-products/products";
import Filter from "../app-filter/filter";
//react bootstrap
import Stack from 'react-bootstrap/Stack';
//styles
import './app-styles/app.scss';

const App = () => {
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
            <Products/>
            <Filter/>
        </Stack>
    </div>
   ) 
}

export default App;