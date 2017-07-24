 //metodo de inicio de aplicación

 window.onload = function() {

      //Cerrar session 
      firebase.auth().signOut();
      
      initApp();
};


function initApp(){

// metodo que escucha el inicio y cierrae de  session 
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
   
    
    
  } else {
     // User is signed out.
 
  }
});


};



//funcion de login 
function login (){

var txtEmail= document.getElementById ("txtEmail");
var txtPass= document.getElementById ("txtPass");
  
  //alert("Login - "+txtEmail.value);
    if(txtEmail.value !="" && txtPass.value !=""){

          createUserWithEmailAndPassword(txtEmail.value , txtPass.value);
       // signInWithEmailAndPassword(txtEmail.value , txtPass.value);

    }else{


    }




}

//Funcion para crear un usuario en firebase 

function createUserWithEmailAndPassword(email, password){

firebase.auth().createUserWithEmailAndPassword(email, password)
.then(function(data){
  

  alert("data"+data);
  //Aqui va el codigo si todo salio bien 

}) 
.catch(function(error) {
   // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

});

}

//Metodo para autenticar un usuario
function  signInWithEmailAndPassword(email, password){

 alert("signInWithEmailAndPassword");

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;


});

}


