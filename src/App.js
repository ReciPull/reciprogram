import React, { Component } from 'react';
import './App.css'
import IngredientSection from './components/IngredientSection';
import logo from './components/imgs/recipull_circle.png'

<<<<<<< HEAD
import CardSection from './components/CardSection';
=======
import CardSection from './components/Card/CardSection';
>>>>>>> 956cfaaebadbc6e2b5d74e475fe018f0c991cd23

class App extends React.Component {
    render() {
        return (
          <div className="App">
            <div className="TitleBar">
                <img src={logo}/>
            </div>
            <div className="MainSectors">
                <div className="IngredientSector">
                    
                    <IngredientSection />
                </div>
                <div className="CardSector">
                    <CardSection />
                </div>
            </div>
          </div>
        );
      }
}

export default App; 
