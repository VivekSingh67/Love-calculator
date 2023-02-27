function lovecal(){
    let name = document.getElementById('name').value;
    let lname = document.getElementById('lname').value;
    if(name ==""){
        alert("Enter Your Name");
    }
    else if(!isNaN(name)){
        alert('Enter only Characters');
    }
    else if(name.length <=2){
        alert('Enter a three digit number');
    }
    if(lname ==""){
        alert('Enter Your Name');
    }
    else if(!isNaN(lname)){
        alert("Enter only Characters");
    }
    else if(lname.length <=2){
        alert("Enter a three digit number");
    }
    let local = Math.floor(Math.random()*100);
    document.getElementById('lovevalue').value = local +"%";

}