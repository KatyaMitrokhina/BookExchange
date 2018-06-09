/** REACT **/
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

/** DATABASE **/
import mongoose from 'mongoose';

/** STYLE **/
import './Layout.css';

/** COMPONENTS **/
import Landing from '../IndexPage/Landing';
import AddBook from '../Books/Add';
import AllBooks from '../Books/All';

class Layout extends Component {
    render() {
        return (
            <div>
                <div>Some text</div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/books" component={AllBooks}/>
                        <Route path="/books/add" component={AddBook}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Layout;
