import React, { Component } from 'react';
import Axios from 'axios';
import './Add.css';

class AddBook extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleOwnerChange = this.handleOwnerChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        book: {
            title: "",
            author: "",
            description: "",
            pictureUrl: "",
            bookOwner: {
                name: "",
                city: "",
                phone: "",
                vkUrl: ""
            },
        }
    };

    handleChange(event) {
        let bookObj = this.state.book;
        bookObj[event.target.name]= event.target.value;
        this.setState({book: bookObj });
    }

    handleOwnerChange(event){
        let bookObj = this.state.book;
        bookObj.bookOwner[event.target.name] = event.target.value;
        this.setState({book: bookObj});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.book);

        var data = new FormData();
        data.append( "json", JSON.stringify( this.state.book ) );
        var headers = new Headers();
        headers.append("Content-Type", "application/json");

        let options = {
            method: 'post',
            headers: headers,
            mode: 'cors',
            body: this.state.book
        };

        Axios.post('http://localhost:2000/api/books/', this.state.book)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(){
        return (
            <div className="add-book-form">
                <form className="uk-form-stacked" onSubmit={this.handleSubmit}>
                    <div className="uk-grid">
                        <fieldset className="uk-fieldset add-book-book">
                            <legend className="uk-legend uk-text-center add-book-legend">Добавление книги</legend>
                            <div className="uk-margin">
                                <label className="uk-form-label add-book-label">Название:</label>
                                <input className="uk-input" type="text" placeholder="Название книги"
                                       value={this.state.book.title}
                                       onChange={this.handleChange} name="title"/>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label add-book-label">Автор:</label>
                                <input className="uk-input" type="text" placeholder="Автор книги"
                                       value={this.state.book.author}
                                       onChange={this.handleChange} name="author"/>
                            </div>

                            <div className="uk-margin">
                                <label className="uk-form-label add-book-label">Описание:</label>
                                <textarea className="uk-textarea" rows="5" placeholder="Описание"
                                          value={this.state.book.description}
                                          onChange={this.handleChange} name="description"></textarea>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label add-book-label">Изображение (ссылка):</label>
                                <input className="uk-input" type="text" placeholder="Ссылка на изображение"
                                       value={this.state.book.pictureUrl}
                                       onChange={this.handleChange} name="pictureUrl"/>
                            </div>
                        </fieldset>
                        <fieldset className="uk-fieldset add-book-owner">
                            <legend className="uk-legend uk-text-center add-book-legend">Данные владельца</legend>
                            <div className="uk-margin">
                                <label className="uk-form-label add-book-label">ФИО:</label>
                                <input className="uk-input" type="text" placeholder="Ваши имя и фамилия"
                                       value={this.state.book.bookOwner.name}
                                       onChange={this.handleOwnerChange} name="name"/>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label add-book-label">Город:</label>
                                <input className="uk-input" type="text" placeholder="Ваш город"
                                       value={this.state.book.bookOwner.city}
                                       onChange={this.handleOwnerChange} name="city"/>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label add-book-label">Телефон:</label>
                                <input className="uk-input" type="text" placeholder="Ваш номер телефона"
                                       value={this.state.book.bookOwner.phone}
                                       onChange={this.handleOwnerChange} name="phone"/>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label add-book-label">Страница ВКонтакте (опционально):</label>
                                <input className="uk-input" type="text" placeholder="Адрес вашей страницы Вконтакте"
                                       value={this.state.book.bookOwner.vkUrl}
                                       onChange={this.handleOwnerChange} name="vkUrl"/>
                            </div>
                        </fieldset>
                    </div>
                    <div className="add-book-form-submit">
                        <button className="uk-button uk-button-primary uk-button-large .uk-width-1-1 add-book-form-submit-button"
                                type="submit" value="Submit">Отправить!</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBook;