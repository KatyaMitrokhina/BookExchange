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
                    <div className="uk-grid-large landing-partners-items" data-uk-grid>
                        <div className="uk-width-1-2 landing-partners-item">"ЧитайСтрана"<br/>
                            Улица Петропавловская 34а<br/>
                            85-81-14
                        </div>
                        <div className="uk-width-1-2 landing-partners-item">"Ножницы"<br/>
                            Улица Коломенская 6<br/>
                            82-77-50
                        </div>
                        <div className="uk-width-1-2 landing-partners-item">"Обложка"<br/>
                            Улица Ивановская 17<br/>
                            83-14-21<br/>
                        </div>
                    </div>
                    <div className="uk-child-width-1-2@m landing-partners-images" data-uk-grid>
                        <div>
                            <div className="uk-card uk-card-default uk-card-hover">
                                <div className="uk-card-media-top">
                                    <img src="/img/store-2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="uk-card uk-card-default uk-card-hover">
                                <div className="uk-card-media-top">
                                    <img src="/img/store-1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="landing-book-slideshow">
                    <div className="uk-position-relative uk-visible-toggle landing-book-slideshow-element" uk-slideshow="animation: push">

                        <ul className="uk-slideshow-items">
                            <li>
                                <img src="" alt="" uk-cover/>
                                <div
                                    className="uk-overlay uk-text-center uk-position-top">
                                    <h3 className="landing-slideshow-first-slide-title">СОВЕТУЕМ ПОЧИТАТЬ</h3>
                                </div>
                                <div
                                    className="uk-overlay uk-position-center uk-width-1-2 landing-slideshow-first-slide-text-block">
                                    <p className="landing-slideshow-text">В нашей еженедельной подборке Вы сможете найти три интересные и захватывающие книги от всемирно известных авторов, которые мы Вам советуем к прочтению.
                                        Чтобы просмотреть текущую подборку листните вправо <span uk-icon="arrow-right"></span></p>
                                </div>
                            </li>
                            <li>
                                <img src="/img/book-underlay.jpg"  height="" alt="" data-uk-cover/>
                                    <div
                                        className="uk-overlay uk-text-center uk-position-large uk-position-center-left landing-slideshow-block-title">
                                        <h3 className="uk-margin-remove landing-slideshow-text-title">М. А. Булгаков</h3>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <p className="uk-margin-remove landing-slideshow-text-title">Мастер и Маргарита</p>
                                    </div>
                                    <div
                                        className="uk-overlay uk-text-center uk-position-center-right uk-position-large landing-slideshow-block-text">
                                        <p className="uk-margin-remove landing-slideshow-text">Мастер и Маргарита" М.А.Булгакова - самое удивительное и загадочное произведение XX века. Опубликованный в середине 1960-х, этот роман поразил читателей необычностью замысла, красочностью и фантастичностью действия, объединяющего героев разных эпох и культур. Автор создал "роман в романе", где сплетены воедино религиозно-историческая мистерия, восходящая к легенде о распятом Христе, московская "буффонада" и сверхъестественные сцены с персонажами, воплощающими некую темную силу, которая однако "вечно хочет зла и вечно совершает благо</p>
                                    </div>
                            </li>
                            <li>
                                <img src="/img/book-underlay.jpg" alt="" data-uk-cover/>
                                <div
                                    className="uk-overlay uk-text-center uk-position-large uk-position-center-left landing-slideshow-block-title">
                                    <h3 className="uk-margin-remove landing-slideshow-text-title">Габриэль Гарсиа Маркес</h3>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <p className="uk-margin-remove landing-slideshow-text-title">Сто лет одиночества</p>
                                </div>
                                <div
                                    className="uk-overlay uk-text-center uk-position-center-right uk-position-large landing-slideshow-block-text">
                                    <p className="uk-margin-remove landing-slideshow-text">В романе «Сто лет одиночества» показаны зарождение, расцвет, закат и гибель рода Буэндиа. История этого рода – это история одиночества, так или иначе проявившегося в судьбе каждого из Буэндиа. Одиночество, разобщённость членов семьи, их неспособность понять и быть понятыми друг другом приобретают в романе поистине мифологический характер. Да и сама история нескольких поколений семьи Буэндиа приобретает характер родового мифа, а с ним и его характерные черты –  заданность и предопределённость судьбы героев.</p>
                                </div>
                            </li>
                            <li>
                                <img src="/img/book-underlay.jpg" alt="" data-uk-cover/>
                                <div
                                    className="uk-overlay uk-text-center uk-position-large uk-position-center-left landing-slideshow-block-title">
                                    <h3 className="uk-margin-remove landing-slideshow-text-title">Стивен Кинг</h3>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <p className="uk-margin-remove landing-slideshow-text-title">Зелёная миля</p>
                                </div>
                                <div
                                    className="uk-overlay uk-text-center uk-position-center-right uk-position-large landing-slideshow-block-text">
                                    <p className="uk-margin-remove landing-slideshow-text">В тюрьме «Холодная гора» блок смертников называют Зеленой Милей. Там видели разных заключенных, но однажды на Милю привозят Джона Коффи – огромного негра, который якобы совершил страшное преступление – жестоко убил двух маленьких девочек. И вот Полу Эджкомбу и другим сотрудника блока предстоит узнать, что не все бывает таким, каким кажется. Иногда тот, кто за решеткой может быть лучше того, кто снаружи. А смерть может стать желанным избавлением от тяжкого бремени жизни.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="uk-light">
                            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#"
                               data-uk-slidenav-previous uk-slideshow-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#"
                               data-uk-slidenav-next uk-slideshow-item="next"></a>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Landing;