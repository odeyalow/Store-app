//components
import { Component } from 'react';
//react bootstrap
import {Stack, Button, Form} from 'react-bootstrap';

class Filter extends Component{
    constructor(props){
      super(props);
      this.state = {
        priceFrom: 0,
        priceTo: 0,
        category:'all'
      }
    }

    onUpdatePriceFrom = (e) => {
      const priceFrom = e.target.value;
      this.setState({priceFrom})
    }
    onUpdatePriceTo = (e) => {
      const priceTo = e.target.value;
      this.setState({priceTo})
    }
    onUpdateCategory = (e) => {
      const category = e.target.value;
      this.setState({category})
    }

    onUpdateFilters = () => {
      this.props.onUpdateFilters(this.state);
    }
    onResetFilters = () => {
      this.setState({
        priceFrom: 0,
        priceTo: 0,
        category: 'all'
      });
      const defaultOption = document.querySelector('.defaultOption');
      defaultOption.selected = true;
    }
    
  render(){
      const {data} = this.props;
      const categoryOptions = data.map(category => {
        return <option key={category.value} value={category.value}>{category.name}</option>
      })

      return (
        <Stack gap={3} style={{maxWidth:'318px', height:'365px', backgroundColor:'white', borderRadius:'7px', padding:'20px'}}>
        <h5 className="price-title" style={{marginBottom:'-5px'}}>Цена</h5>
          <Stack gap={3} direction='horizontal'>
            <Form.Control 
            type="number" 
            placeholder="От"
            value={this.state.priceFrom}
            className='form'
            onChange={this.onUpdatePriceFrom}/>
            <h4 className="divider">-</h4>
            <Form.Control 
            type="number" 
            value={this.state.priceTo}
            placeholder="До"
            onChange={this.onUpdatePriceTo}/>
          </Stack>
          <h5 className="category-title" style={{margin:'10px 0 -5px'}}>Категория</h5>
          <Stack gap={3} direction='horizontal'>
            <Form.Select
            aria-label="Default select example"
            onChange={this.onUpdateCategory}>
                <option className='defaultOption' value='all'>Все</option>
                {categoryOptions}
            </Form.Select>
          </Stack>

          <Button 
          variant="primary" 
          style={{marginTop:'40px'}}
          onClick={this.onUpdateFilters}>Применить</Button>
          <Button 
          variant="danger"
          onClick={this.onResetFilters}>Сбросить</Button>
        </Stack>
    );
  }
}


export default Filter;