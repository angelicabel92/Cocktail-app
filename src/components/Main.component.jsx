import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeComponent from "./Home.component";
import CocktailFileComponent from './CocktailFile/cocktailFileComponent';

const MainComponent = () => {
    return ( 
        <main>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/cocktail/:id" component={CocktailFileComponent} />
            </Switch>
        </main>
     );
}
 
export default MainComponent;