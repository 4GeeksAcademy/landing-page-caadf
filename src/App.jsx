import React from 'react';
import Navbar from './componentes/navbar.jsx';
import Jumbotron from './componentes/jumbotron.jsx';

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
    </>
    )
}

export default App;