//components
import {Component} from 'react';
//react bootstrap
import Form from 'react-bootstrap/Form';

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue:''
        }
    }

    onUpdateSearch = e => {
        const searchValue = e.target.value;
        this.setState({searchValue});
        this.props.onUpdateSearch(searchValue);
    }
    
    render() {
        return (
            <>
                <Form.Control 
                size="lg" 
                type="text" 
                placeholder="Найти..."
                value={this.state.searchValue}
                onChange={this.onUpdateSearch}/>
            </>
        );
    }
}


export default Search;