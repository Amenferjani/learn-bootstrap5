document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from being submitted
  
    // Retrieve input field values
    
    var email = document.getElementById('emailInput').value;
  
    // Process the data or perform any desired actions
    console.log('Email:', email);
  
    // Call a function or perform further operations with the retrieved values
    // ...
  });
  