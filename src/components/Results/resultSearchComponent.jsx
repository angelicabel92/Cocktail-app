import React from 'react';
import { Link } from 'react-router-dom';
import './resultSearchComponent.scss';

const ResultSearchComponent = ({product}) => {
    return ( 
        <Link to={`cocktail/${product.idDrink}`} className="col-md-2 coctels__cards-item">
            <div className="coctels__cards-item_img">
                <img src={product.strDrinkThumb} alt={product.strDrink}/>
            </div>
            <h5 className="coctels__cards-item_name">{product.strDrink}</h5>
        </Link>
     );
}
 
export default ResultSearchComponent;