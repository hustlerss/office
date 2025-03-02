let car = document.getElementById("car");
let backWheel = document.querySelector(".back-wheel");
let frontWheel = document.querySelector(".front-wheel");
let trafficLight = document.querySelector(".traffic-light");
let lights = trafficLight.querySelectorAll(".light");

let carSpeed = 4; // Initial speed
let moving = true;

const lightDurations = [3000, 1000, 5000]; // Red, yellow, green durations in milliseconds
let currentLight = 2; // Start with green light

// Function to move the car
function moveCar() {
  if (moving) {
    let carLeft = parseInt(window.getComputedStyle(car).left, 10);
    let screenWidth = window.innerWidth;
    let middle = screenWidth / 2 - car.offsetWidth / 2; // Middle of the screen

    // Reduce speed gradually when the car is near the middle
    if (carLeft >= middle - 150 && carLeft <= middle + 150) {
      carSpeed = 1.5; // Slow down speed
    } else {
      carSpeed = 4; // Restore normal speed
    }

    if (carLeft >= middle - 5 && carLeft <= middle + 5) {
      stopCar(); // Stop car at the middle
    } else {
      car.style.left = carLeft + carSpeed + "px";

      if (carLeft > screenWidth) {
        car.style.left = "-100px"; // Reset car position to the left
      }
    }
  }
  requestAnimationFrame(moveCar);
}

// Function to stop the car
function stopCar() {
  moving = false;
  backWheel.style.animationPlayState = "running";
  frontWheel.style.animationPlayState = "running";
}

// Function to resume car movement
function resumeCar() {
  moving = true;
  backWheel.style.animationPlayState = "running";
  frontWheel.style.animationPlayState = "running";
}

// Start moving the car
requestAnimationFrame(moveCar);


    // text behind car 
    
    // gsap animation
    document.addEventListener("DOMContentLoaded", function () {
      // Create a GSAP timeline for the fanta image animation
      var tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".three", // Trigger animation when .three section is in view
          start: "0% 95%", // Start animation when top of .three reaches 95% of viewport height
          end: "70% 50%", // End animation when .three reaches 50% of viewport height
          scrub: true, // Smooth scrolling effect
          markers: true, // Debugging markers (remove after testing)
        },
      });
  
      // Animate the fanta image
      tl2.to("#fanta", {
        top: "250%", // Move the image vertically down
        left: "30%", // Move the image horizontally to the right
        ease: "power2.inOut", // Smooth easing
        scale:"1.2",
      });
    }); 

    //third section animation 
    