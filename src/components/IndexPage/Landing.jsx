import React, { Component } from 'react';
import './style/Landing.css';

class Landing extends Component {

    render(){
        return (
            <div>

                <section className="landing-start">
                    <div className="landing-start-img" uk-parallax="bgy: -200">
                        <div className="landing-start-label">BookExchange</div>
                    </div>
                </section>
                <section className="landing-about-us" uk-scrollspy="cls:uk-animation-fade; delay: 200">
                    <div className="landing-title">
                        О нас
                    </div>
                    <div className="landing-about-us-text">
                        Наверняка в вашей жизни возникали ситуации, когда очередная книга уже прочитана и хочется купить новую, но место в домашней библиотеке стремительно кончается. BookExchange - это сервис для обмена книгами. Все, что Вам нужно для успешного обмена - пройти простую процедуру регистрации, найти интересующую Вас книгу в нашей базе и договориться с ее пользователем. Также вы можете составить электронную библиотеку с предложениями своих книг, которыми Вы готовы поменяться с другими читателями. Мы сотрудничаем с несколькими крупными книжными магазинами и магазинами канц-товаров, поэтому используя наш сайт и осуществляя книгообмен с другими пользователями, Вы получаете бонусы и скидки в магазинах-партнерах. Подарите новую жизнь старым книгам!
                    </div>
                    <div className="landing-about-us-button-holder">
                        <a href="/books" className="uk-button uk-button-primary uk-button-large .uk-width-1-1 landing-about-us-button">Начать!</a>
                    </div>
                </section>
                {/*<hr className="landing-hr" />*/}
                <section className="landing-how" id="landing-how">
                    <div className="landing-title">
                        Как это работает?
                        <div className="landing-how-img"></div>
                    </div>
                </section>
                <section className="landing-partners">
                    <div className="landing-title">
                        Наши партнёры
                    </div>
                    <div className="landing-about-us-text">
                        Мы сотрудничаем с несколькими крупными книжными магазинами и магазинами канцтоваров. Пользуясь нашим сервисом, Вы можете получить эксклюзивные скидки и подарки в магазинах-партнерах.
                    </div>
                </section>
            </div>
        );
    }
}

export default Landing;