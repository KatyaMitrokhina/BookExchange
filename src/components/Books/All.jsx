import React, { Component } from 'react';

class AllBooks extends Component {

    state = {
        books: [
            {
                title: "Том Сойер",
                author: "Марк Твен",
                pictureUrl: "http://www.belcanto.ru/media/images/composition/16081407.jpg"
            }
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
                Все книги:
                <div className="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-small" uk-grid>
                    {this.state.books.map((book, idx) => {
                        return (
                            <div className="uk-text-center" id={idx}>
                                <div className="uk-inline-clip uk-transition-toggle uk-light" tabIndex="0">
                                    <img src={book.pictureUrl} alt=""/>
                                        <div className="uk-position-center">
                                            <div className="uk-transition-slide-top-small"><h4 className="uk-margin-remove">
                                                {book.title.length > 15 ? (book.title.substring(0, 12) + "...") : book.title}
                                                </h4></div>
                                            <div className="uk-transition-slide-bottom-small"><h4
                                                className="uk-margin-remove">{book.author}</h4></div>
                                        </div>
                                </div>
                                <p className="uk-margin-small-top">{book.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default AllBooks;