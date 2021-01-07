import React from 'react';
import '../styles/Home.css';
import { Card, Carousel, Button, Modal, Col, Image } from 'react-bootstrap';

const Home = () => {

    const cards = [
        {
            img: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80",
            title: "Mining",
            description: "Perhaps you’ve heard that Bitcoins are mined and that the people who do this are referred to as miners. Miners are actually confirming and adding Bitcoin transactions to the Bitcoin ledger of transactions (blockchain) and getting rewarded for it!"
        },
        {
            img: "https://images.unsplash.com/photo-1523759724146-4ce060fff7be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
            title: "Courses",
            description: "Buying Bitcoin can be a confusing and cumbersome experience to many and Bitrawr is here to make it as simple as possible.<br/>Your experience will differ greatly based on how you educate yourself in the industry. Our courses are guaranteed to teach you."
        },
        {
            img: "https://images.unsplash.com/photo-1568449262227-fbc4241fefe1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            title: "Wallets",
            description: "'Not your keys, not your Bitcoin' is a well-known saying and quick lesson in Bitcoin security. Storing your Bitcoin on an exchange or with any third-party custodian gives you no guarantee over the ownership of your coins."
        }
    ]

    return (
        <div className="home">
            {/* Header content */}
            <p>home</p>
            <div className="banner-div">
                <div class="diagonal-top"></div>
                <div class="diagonal-middle">
                    <div className="row">
                        <div className="col">
                            <p>The Crypto Hub</p>
                        </div>
                    </div>
                </div>
                <div class="diagonal-bottom"></div>
            </div>
                <Col xs={12} sm={12} md={10} lg={10} className="cards-column">
                    <section className="card1-list">
                        {cards.map((card,i) =>{
                            return(
                                <article className="card1">
                                    <Image
                                        src={card.img}
                                        alt="bitcoin-wallet"
                                        style={{marginBottom: 6}}
                                        thumbnail 
                                    /> 
                                    <header className="card1-header">
                                    <h3 style={{color: "#0377B5", fontWeight: "600"}}>{card.title}</h3>
                                    <p>{card.description}</p>
                                    </header>
                                </article>
                            )
                        })}
                    </section>
                </Col>
            <div className="banner-div">
                <div class="diagonal-top"></div>
                <div class="diagonal-middle">
                    <div className="row">
                        <div className="col">
                            <p>World Class Solutions</p>
                        </div>
                    </div>
                </div>
                <div class="diagonal-bottom"></div>
            </div>
        </div>
    );
};

export default Home;