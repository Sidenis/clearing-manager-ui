import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import SubmissionPage from "./pages/SubmissionPage";
import ClearingCardPage from "./pages/ClearingCardPage";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';

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
                            <Link className='button' to='/'>Submissions</Link>
                            <Link className='button' to='/card'>Card</Link>
                        </nav>
                    </header>
                    <div>
                        <Route path="" exact component={SubmissionPage}/>
                        <Route path="/card" component={ClearingCardPage}/>
                    </div>
                </div>
            </ApolloProvider>
        </Router>
    );
}

export default App;
