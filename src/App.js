import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import ClearingCardPage from "./pages/ClearingCardPage";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';
import SubmissionsPage from "./pages/SubmissionsPage";
import SubmissionCreatePage from "./pages/SubmissionCreatePage";

const BE_URL = process.env.BE_URL || 'http://51.144.170.9:3000';

const client = new ApolloClient({
    uri: BE_URL
});

function App() {
    return (
        <Router>
            <ApolloProvider client={client}>
                <div className="App container">
                    <header>
                        <h1>Clearing Engine</h1>
                        <nav data-test='app-navigation'>
                            <NavLink activeClassName='button-outline' className='button' exact to='/'>Create</NavLink>
                            <NavLink activeClassName='button-outline' className='button' to='/cards'>Submissions History</NavLink>
                        </nav>
                    </header>
                    <Switch>
                        <Route path="/" exact component={SubmissionCreatePage}/>
                        <Route path="/cards/:id" component={ClearingCardPage}/>
                        <Route path="/cards" component={SubmissionsPage}/>
                    </Switch>
                </div>
            </ApolloProvider>
        </Router>
    );
}

export default App;
