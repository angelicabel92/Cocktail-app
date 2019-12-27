import React, { Component } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import './headerComponent.scss';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    
        this.getResults = this.getResults.bind(this);
        //this.getResults();
    
        this.state = {
          search: '',
          results: []
        };
    }  
    
    handleChange = e => {
        this.setState ({
            [e.target.name] : e.target.value
        })
        this.getResults();
    }
    
    getResults() {
        //https://rapidapi.com/theapiguy/api/the-cocktail-db?endpoint=apiendpoint_43e474e2-2bd0-45f6-b4c3-0aacb94ddf87
        fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${this.state.search}`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "78d63c1373msh8833585cf039d7cp1a877djsn5d2601f5d3b7"
          }
        }).then(response => {
          return response.json();
        }).then(results => {
          const result = results['drinks'];
          console.log(result)
          this.setState({ results: result });
        })
        .catch(err => {
          console.log(err);
        });
    };

    render() { 
        return ( 
            <div className="coctels__header">
                <div className="container coctels__header__wrapper">
                    <h1 className="title">Coctels View</h1>
                    <Form className="col-md-6 form">
                        <FormGroup>
                            <Form.Control 
                            type="text" 
                            placeholder="Ingresa un ingrediente"
                            name="search"
                            value={this.state.search}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Form>
                </div>
            </div>
         );
    }
}
 
export default HeaderComponent;
