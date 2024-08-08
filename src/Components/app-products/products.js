import ProductsItem from "../app-products-item/app-products-item";
//react bootstrap
import Stack from 'react-bootstrap/Stack';
const Products = () => {
    return(
        <Stack style={{maxWidth:'882px'}} gap={3}>
            <Stack direction="horizontal" gap={3}>
                <ProductsItem 
                productName='Смартфон'
                productPrice='999$'/>
                <ProductsItem 
                productName='Ноутбук'
                productPrice='1699$'/>
                <ProductsItem 
                productName='Игровая мышка'
                productPrice='39$'/>
            </Stack>

            <Stack direction="horizontal" gap={3}>
                <ProductsItem 
                productName='Холодильник'
                productPrice='799$'/>
                <ProductsItem 
                productName='Телевизор'
                productPrice='899$'/>
                <ProductsItem 
                productName='Игровая клавиатура'
                productPrice='59$'/>
            </Stack>

            <Stack direction="horizontal" gap={3}>
                <ProductsItem 
                productName='Холодильник'
                productPrice='799$'/>
                <ProductsItem 
                productName='Телевизор'
                productPrice='899$'/>
                <ProductsItem 
                productName='Игровая клавиатура'
                productPrice='59$'/>
            </Stack>
        </Stack>
    );
}

export default Products;