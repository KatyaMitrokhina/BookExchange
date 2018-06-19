import React, { Component } from 'react';
import Header from './../IndexPage/Header';

import './All.css';

class AllBooks extends Component {

    state = {
        books: [
            {
                title: "Том Сойер",
                author: "Марк Твен",
                pictureUrl: "http://www.belcanto.ru/media/images/composition/16081407.jpg"
            },
            {
                title: "Том Сойер 2",
                author: "Марк Твен",
                pictureUrl: "http://www.belcanto.ru/media/images/composition/16081407.jpg"
            },
            {
                title: "Том Сойер 3",
                author: "Марк Твен",
                pictureUrl: "http://www.belcanto.ru/media/images/composition/16081407.jpg"
            },
        ]
    };

    componentDidMount(){
        this.update();
    }

    update(){
        this.loadAllBooks();
    }

    loadAllBooks(){

    }

    render(){
        return (
            <div>
                <Header/>
                <div className="all-books-grid">
                    <div className="uk-child-width-1-2 uk-grid-match uk-grid-medium uk-align-center" data-uk-grid>
                        {this.state.books.map((book, idx) => {
                            return (
                                <div className="uk-text-center" id={idx}>
                                    <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
                                        <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
                                            <img src={book.pictureUrl} alt=""/>
                                            <div
                                                className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-center uk-flex-middle">
                                                <p className="uk-h4 uk-margin-remove">{book.title.length > 15 ? (book.title.substring(0, 12) + "...") : book.title}
                                                    <br/><br/>{book.author}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="uk-margin-small-top">{book.title}</p>
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