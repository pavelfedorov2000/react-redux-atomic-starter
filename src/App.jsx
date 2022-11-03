import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './Pages';


function App() {
    return (
        <div className="wrapper">
            <Header />
            <BurgerMenu />
            <AppRouter />
            <Footer />
        </div>
    );
}

export default App;
