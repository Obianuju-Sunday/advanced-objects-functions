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

// Application Configuration using IIFE
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

// Score Tracker using IIFE

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

// Discount System using IIFE
(function(){
    var originalPrice = 6800;
    var discountPercent = 40;

    function calculateDiscount(){
        return discountPrice = originalPrice - (originalPrice * discountPercent / 100)
    }

    function showDiscount(){
        calculateDiscount();
        console.log(`After ${discountPercent}% discount, the new price to be paid at the checkout is ${discountPrice}.`)
    }

    showDiscount();
})();