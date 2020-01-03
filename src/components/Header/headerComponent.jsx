import React, { Component } from "react";
import { Form, FormGroup } from "react-bootstrap";
import "./headerComponent.scss";
import LoadingComponent from "../Loading/loadingComponent";
import ResultSearchComponent from '../Results/resultSearchComponent';
import BackImg from '../../assets/back-header.jpg';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.getResultsIngred = this.getResultsIngred.bind(this);

    this.state = {
      search: "",
      results: [],
      loading: true,
      error: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    setTimeout(() => {
      this.setState({ loading: true });
      this.getResultsIngred();
    }, 3000);
    this.setState({ loading: false });
  };

  getResultsIngred() {
    //https://rapidapi.com/theapiguy/api/the-cocktail-db?endpoint=apiendpoint_43e474e2-2bd0-45f6-b4c3-0aacb94ddf87
    fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?i=${this.state.search}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": "78d63c1373msh8833585cf039d7cp1a877djsn5d2601f5d3b7"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(results => {
        const result = results["drinks"];
        this.setState({ results: result });
      })
      .catch(err => {
        this.setState({ loading: true, error: true, results: []});
      });
  }

  render() {
    return (
      <div className="container-fluid coctels__header">
        <div className="row coctels__header__wrapper">
          <div className="coctels__header__img">
            <img src={BackImg} alt="back-img"/>
          </div>
          <h1 className="title">Cocktails View</h1>
          <Form className="col-md-4 form">
            <FormGroup>
              <Form.Control
                type="text"
                placeholder="Ingresa un ingrediente"
                name="search"
                value={this.state.search}
                onChange={this.handleChange}
              />
            </FormGroup>
            <div className="coctels__header__btns">
              <input className="coctels__header__btns-item" type="button" value="Ingredient" onClick={this.getResultsIngredIngred}/>
              <input className="coctels__header__btns-item" type="button" value="Cocktails Name"/>
            </div>
          </Form>
        </div>
        <div className="row coctels__cards">
          {!this.state.loading
            ? <LoadingComponent />
            : this.state.results.map((product, productIndex) => {
                return <React.Fragment key={productIndex}>
                {this.state.search &&
                  <ResultSearchComponent product={product} />
                }
                </React.Fragment>
              })
          }
        </div>
        {this.state.error ?
          <div>No se encuentra lo que deseas</div>
        : ''}
      </div>
    );
  }
}

export default HeaderComponent;
