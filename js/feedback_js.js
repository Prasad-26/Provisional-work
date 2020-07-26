// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDDT-BN139PgaoSMYiEm2nN4TSdWigwBjM",
    authDomain: "krushi-sarthi-feedback.firebaseapp.com",
    databaseURL: "https://krushi-sarthi-feedback.firebaseio.com",
    projectId: "krushi-sarthi-feedback",
    storageBucket: "krushi-sarthi-feedback.appspot.com",
    messagingSenderId: "44505449568",
    appId: "1:44505449568:web:ab4c765dff8ca527fe2f05",
    measurementId: "G-H26QSH5ZGB"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    //var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, phone, message);
  
    // Show alert
    //document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      //company:company,
      email:email,
      phone:phone,
      message:message
    });
  }