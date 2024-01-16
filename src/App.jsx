import React from 'react';
import Navbar from './componentes/navbar';
import Jumbotron from './componentes/jumbotron';
import Card from './componentes/card';
import Footer from './componentes/footer';

const App = () => {
    return (
        <>
            <Navbar
                titulo="Start Bootstrap"
                home="Home"
                about="About"
                service="Service"
                contact="Contact"
            />
            <Jumbotron
                title="A warm Welcome!"
                parrafo=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas temporibus omnis libero autem! Deserunt accusamus earum commodi blanditiis similique ea eos consequatur necessitatibus. Ducimus corporis illum eveniet qui eos."
                boton="Call to action!"
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-xs-12 ">
                        <Card
                            img="https://i.pinimg.com/564x/de/0b/bd/de0bbdac45d24e4961f6a1fb8f9c080c.jpg"
                            titulo="Card Title"
                            parrafocards="Lorem ipsum dolor sit amet,consectetur adipising est.Explicabo magni sapiente, tempore debitis beatae culpa natus architecto"
                            botontexto="Find out more!"
                        />
                    </div>
                    <div className="col-lg-3 col-xs-12 ">
                        <Card
                            img="https://i.pinimg.com/564x/de/0b/bd/de0bbdac45d24e4961f6a1fb8f9c080c.jpg"
                            titulo="Card tittle"
                            parrafocards="Lorem ipsum dolor sit amet,consectetur adipising est.Explicabo magni sapiente, tempore debitis beatae culpa natus architecto"
                            botontexto="Find out more!"
                        />
                    </div>
                    <div className="col-lg-3 col-xs-12">
                        <Card
                            img="https://i.pinimg.com/564x/de/0b/bd/de0bbdac45d24e4961f6a1fb8f9c080c.jpg"
                            titulo="Card Title"
                            parrafocards="Lorem ipsum dolor sit amet,consectetur adipising est.Explicabo magni sapiente, tempore debitis beatae culpa natus architecto"
                            botontexto="Find out more!"
                        />
                    </div>
                    <div className="col-lg-3 col-xs-12">
                        <Card
                            img="https://i.pinimg.com/564x/de/0b/bd/de0bbdac45d24e4961f6a1fb8f9c080c.jpg"
                            titulo="Card Title"
                            parrafocards="Lorem ipsum dolor sit amet,consectetur adipising est.Explicabo magni sapiente, tempore debitis beatae culpa natus architecto"
                            botontexto="Find out more!"
                        />
                    </div>
                </div>
            </div>
            <Footer
            final="Copyright your website 2019"
            />

        </>
    )
}

export default App;