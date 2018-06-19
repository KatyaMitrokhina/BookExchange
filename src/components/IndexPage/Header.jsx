import React, { Component } from 'react';

class LandingHeader extends Component {

    render(){
        return (
            <div>
                <nav className="uk-navbar-container uk-margin" data-uk-navbar>
                    <div className="uk-navbar-center">
                        <div className="uk-navbar-center-left">
                            <div>
                                <ul className="uk-navbar-nav">
                                    <li><a href="/">Главная</a></li>
                                    <li className="uk-active"><a href="/books">Все книги</a></li>
                                </ul>
                            </div>
                        </div>
                        <a className="uk-navbar-item uk-logo" href="/">BookExchange</a>
                        <div className="uk-navbar-center-right">
                            <div>
                                <ul className="uk-navbar-nav">
                                    <li><a href="/books/add">Добавить книгу</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default LandingHeader;