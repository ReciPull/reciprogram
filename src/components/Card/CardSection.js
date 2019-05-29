import React, { Component } from 'react';
<<<<<<< HEAD
import './CardSection.css'
import uuid from 'uuid'
import { isAbsolute } from 'path';
import Card from './Card';
import Cards from './Cards';

class CardSection extends Component {
    state = {
        hasRecipes: 0, 
        recipeList: [
        ],
    }


    addRecipe = (e) => {
        if (document.getElementById("recipes").innerHTML === "") {
            return;
        }
        else if (document.getElementById("recipes").innerHTML === x) {
            return; 
        }
        else {
            e.preventDefault(); 
            this.state.recipeList = []; 
            this.setState({recipeList: this.state.recipeList}); 
            var s = ""; 
            s = document.getElementById("recipes").innerHTML; 
            console.log(s); 
            if (s === "No Recipes") {
                this.state.hasRecipes = -1; 
                this.setState({hasRecipes: this.state.hasRecipes});
            }
            else {
                this.state.hasRecipes = 1; 
                this.setState({hasRecipes: this.state.hasRecipes});
                console.log(this.state.hasRecipes); 
                var s1 = s.split("|"); 
                console.log(s1); 
                for (var i=0; i<s1.length; i++) {
                    var s2 = s1[i].split("`"); 
                    const newRecipe = {
                        id: uuid.v4(),
                        tag: s2[2],
                        image: s2[4], 
                        title: s2[1], 
                        text: s2[5],
                        numIngredients: s2[6],
                        numVotes: parseInt(s2[7]), 
                    }
                    console.log(newRecipe); 
                    this.state.recipeList.push(newRecipe); 
                    this.setState({ recipeList: this.state.recipeList}); 
                    console.log(this.state.recipeList);
                    var x = document.getElementById("recipes").innerHTML; 
                    document.getElementById("recipes").innerHTML = "";  
                }
                console.log("done");  
            }
        }  
    }
    render() {
            return(
                <div className="inLine">
                    <div className="outputButtonContainer">
                        <button onClick={this.addRecipe} className="outputButton">Output</button>
                    </div>
                    <br></br>
                    <Cards hasRecipes={this.state.hasRecipes} recipeList={this.state.recipeList}></Cards>
=======
import Card from './Card';

class CardSection extends Component {
    render() {

        function addCard(category, imageURL, date, title, text) {
            return(
                <Card category={category} image={imageURL} date={date} title={title} text={text}/>
            )
        }
            return(
                <div className="inLine">
                    <Card category="Lunch" image='https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/2048x1024/landscape-1506456062-delish-spaghetti-meatballs.jpg?resize=1200:*' date="April 23, 2019"
                        title='Spaghetti & Meatballs' 
                        text='Basic recipe for Spaghetti & Meatballs. Perfect, quick recipe for a college student.'
                    />
                    <Card category="Breakfast" image='https://www.centercutcook.com/wp-content/uploads/2014/09/fruit-yogurt-granola-parfait-3.jpg' date="April 23, 2019"
                        title='Yogurt with Granola' 
                        text='Basic recipe for a balanced breakfast meal. Perfect, quick recipe for a college student to jumpstart their day.'
                    />
                    {addCard("Dinner","https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/2048x1024/landscape-1506456062-delish-spaghetti-meatballs.jpg?resize=1200:*", "April 23, 2019", "Spaghetti","This is a Spaghetti recipe")}
                    {addCard("Lunch","https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/2048x1024/landscape-1506456062-delish-spaghetti-meatballs.jpg?resize=1200:*", "April 23, 2019", "Spaghetti","This is a Spaghetti recipe")}
>>>>>>> 956cfaaebadbc6e2b5d74e475fe018f0c991cd23
                </div>
            )
        }
}

export default CardSection