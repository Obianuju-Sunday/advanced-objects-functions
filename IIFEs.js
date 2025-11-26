// IIFE - Immediately Invoked Function Expression


// (function(){
//   console.log('Obianuju is learning IIFEs');
// })();

// var mode = (function(){
//   return 'Motivated and Energetic';
// })

// console.log('Current mode: ' + mode());

// let currentMode = (function(name, topic){
//   return `${name} is feeling motivated and energetic currently learning ${topic}.`;
// })

// console.log(currentMode('Obianuju', 'JavaScript'));

(function () {
  const config = {
    theme: "dark",
    mode: "beginner",
    user: "Obianuju"
  };

  function toggleTheme() {
    if (config.theme === "dark"){
      config.theme = "light";
      console.log("Theme changed to light.");
    } else {
      config.theme === "dark";
      console.log("Theme changed to dark.");
    }
    return config.theme;
  }

  toggleTheme();

  console.log(`Welcome ${config.user}! Your app is set to ${config.theme} theme in ${config.mode} mode.`);
})();

(function(){
  var counter = 0;
  
  function increaseCounter(){
    counter += 1;
    console.log(counter);
  }
  
  function showCounter(){
    console.log(`Current score: ${counter}`)
  }
  
  increaseCounter();
  showCounter();
})();