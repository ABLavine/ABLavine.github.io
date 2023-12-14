function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    // console.log('Code is running');
    return age;
  }
  
  // U
  document.addEventListener("DOMContentLoaded", function() {
    const birthdate = "2007-02-05"; 
    const ageElement = document.getElementById("age");
  
    if (ageElement) {
        ageElement.textContent = `I'm ${calculateAge(birthdate)} years old. I was born in Cambridge MA, and currenly still live there. I love video games, baking, dogs, and helping out my friends. I love to code/learn about the way things work, and this kinda extends to my love of philosophy.
        I want to figure out how the world works, and I think that the fusion of code and philosophy/big questions is cruical in this time of developing AI.`;    }
  });

