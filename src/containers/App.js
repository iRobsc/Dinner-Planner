import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../pages/ScrollToTop";
import AppRoute from "../pages/AppRoute";
import MainLayout from "../layouts/MainLayout";
import ResultLayout from "../layouts/ResultLayout";
import Welcome from "../components/Welcome";
import SearchPage from "../pages/SearchPage";
import DishDetailsPage from "../pages/DishDetailsPage";
import MyDinnerPage from "../pages/MyDinnerPage";
import RecipesPage from "../pages/RecipesPage";
import NoMatchPage from "../pages/NoMatchPage";

class App extends Component {
  state = {
    menu: [],
    numberOfGuests: 1,
  };

  setNumberOfGuests = (numberOfGuests) => {
    this.setState({ numberOfGuests });
  }

  addDishToMenu = (dish) => {
    this.setState({ menu: [...this.state.menu, dish] });
  }

  render() {
    const { numberOfGuests, menu } = this.state;
    const { setNumberOfGuests, addDishToMenu } = this;
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <AppRoute
              path="/search"
              component={SearchPage}
              layout={MainLayout}
              layoutProps={{ numberOfGuests, menu, setNumberOfGuests }}
            />
            <AppRoute
              path="/dish/:id"
              component={DishDetailsPage}
              componentProps={{ numberOfGuests, addDishToMenu }}
              layout={MainLayout}
              layoutProps={{ numberOfGuests, menu, setNumberOfGuests }}
            />
            <AppRoute
              path="/mydinner"
              component={MyDinnerPage}
              layout={ResultLayout}
              layoutProps={{ numberOfGuests }}
              componentProps={{ menu, numberOfGuests }}
            />
            <Route path="/recipes" component={RecipesPage} />
            <Route component={NoMatchPage} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;