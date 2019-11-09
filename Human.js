

class Human  {
    name = "";
    job = "";
    skills = ["PHP" , "Javascript"];

    /*constructor(){
        this.name="";
        this.job="";
        this.skills;
    }
    */
    getJob (){
        alert('bonjour');
    }

    learnNewSkill () {
        alert('bonjour');
    }

    forgetSkill (){
        alert('bonjour');
    }

    leaveJob (){
        alert('bonjour');
    }
 
    
    
  
}

class Student extends Human{

    getJob (){
        Student.job="front-end developper"
    }

    learnNewSkill () {
        skills = ["PHP" , "Javascript"];

    }

    forgetSkill (){
        alert('bonjour');
    }

    leaveJob (){
        Student.job = Student.unemployed;
    }

}





export default Human;



 