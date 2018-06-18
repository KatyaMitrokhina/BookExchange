/** REACT **/
import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

/** STYLE **/
import './Layout.css';
import '../../style/uikit.css';
import '../../style/uikit-theme.css';
import '../../style/style.css';

/** COMPONENTS **/
import Landing from '../IndexPage/Landing';
import AddBook from '../Books/Add';
import AllBooks from '../Books/All';

class Layout extends Component {
    render() {
        return (
            <div>
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
