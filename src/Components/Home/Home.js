import React from 'react';
import Header from '../Header/Header';
import Buy from '../Buy/Buy';
import Footer from '../Footer/Footer';

class Home extends React.Component{
    constructor(){
        super();

        // this.state(

        // )
    }
    
    render(){
        return(
            <div>
                <Header />
                <Buy />
                <Footer />
            </div>
        )
    }
}

export default Home