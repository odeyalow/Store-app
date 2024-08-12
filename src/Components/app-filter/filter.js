//react bootstrap
import {Stack, Button, Form} from 'react-bootstrap';

const Filter = ({data}) => {
    const categoryOptions = data.map(category => {
      return <option key={category.value} value={category.value}>{category.name}</option>
    })

    const onApplyFilters = () => {
      console.log('work')
    }
    
    return (
        <Stack gap={3} style={{maxWidth:'318px', height:'306px', backgroundColor:'white', borderRadius:'7px', padding:'20px'}}>
        <h5 className="price-title" style={{marginBottom:'-5px'}}>Цена</h5>
          <Stack gap={3} direction='horizontal'>
            <Form.Control type="number" placeholder="От" />
            <h4 className="divider">-</h4>
            <Form.Control type="number" placeholder="До" />
          </Stack>
          <h5 className="category-title" style={{margin:'10px 0 -5px'}}>Категория</h5>
          <Stack gap={3} direction='horizontal'>
            <Form.Select aria-label="Default select example">
                <option>Все</option>
                {categoryOptions}
            </Form.Select>
          </Stack>

          <Button 
          variant="primary" 
          style={{marginTop:'40px'}}
          onClick={onApplyFilters}>Применить</Button>
        </Stack>
    );
}


export default Filter;