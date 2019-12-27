import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeComponent from "./Home.component";

const MainComponent = () => {
    return ( 
        <main>
            <Switch>
                <Route exact path="/" component={HomeComponent} />
            </Switch>
        </main>
     );
}
 
export default MainComponent;