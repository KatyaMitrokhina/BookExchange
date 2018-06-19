import React, { Component } from 'react';
import Header from './../IndexPage/Header';
import Axios from 'axios';

import './All.css';

class AllBooks extends Component {

    state = {
        books: []
    };

    componentDidMount(){
        this.update();
    }

    update(){
        this.loadAllBooks();
    }

    loadAllBooks(){
        Axios.get('https://shielded-falls-19431.herokuapp.com/api/books/', this.state.book)
            .then((response) => {
                this.setState({
                    books: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(){
        return (
            <div>
                <Header/>
                <div className="all-books-grid">
                    <div className="uk-child-width-1-2 uk-grid-match uk-grid-medium uk-align-center" data-uk-grid>
                        <a href="/books/add">
                        <div className="uk-text-center">
                            <div className="uk-inline-clip uk-transition-toggle uk-light" tabIndex="0">
                                <img src="https://www.tecnicadellascuola.it/wp-content/uploads/2018/04/book.jpg" alt=""/>
                                    <div className="uk-position-center">
                                        <span className="uk-transition-fade uk-overlay-primary" uk-icon="icon: plus; ratio: 2"></span>
                                    </div>
                            </div>
                        </div>
                        </a>
                        {this.state.books.map((book, idx) => {
                            return (
                                <div className="uk-text-center" key={idx}>
                                    <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
                                        <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
                                            <img src={book.pictureUrl} alt=""/>
                                            <div
                                                className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                                                <p className="uk-h4 uk-margin-remove">{book.title.length > 30 ? (book.title.substring(0, 27) + "...") : book.title}
                                                    <br/><br/>{book.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default AllBooks;