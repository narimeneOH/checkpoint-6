import React from 'react';

class Human  {
    name;
    order;
    age;

    /*constructor(){
        this.name="Max";
        this.order="Carnivor";
        this.age=3;
    }
    */
   
    walk(){
        alert(`${this.name} is walking`);
    }
    
    /*growUp(){
        this.age +=1;
    }*/
}

class Dog extends Animal {
    name;
    order;
    age;
    constructor(){
        this.super();
        this.name="Max";
        this.order="Carnivor";
        this.age=3;
    }
    
}


export default Animal;



 