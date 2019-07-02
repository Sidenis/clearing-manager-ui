import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
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
                        <nav>
                            <Link className='button' to='/'>Create</Link>
                            <Link className='button' to='/cards'>Submissions</Link>
                        </nav>
                    </header>
                    <div>
                        <Route path="/" exact component={SubmissionCreatePage}/>
                        <Route path="/cards" component={SubmissionsPage}/>
                        <Route path="/cards/:id" component={ClearingCardPage}/>
                    </div>
                </div>
            </ApolloProvider>
        </Router>
    );
}

export default App;
