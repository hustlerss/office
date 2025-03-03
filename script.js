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
    
    document.addEventListener("DOMContentLoaded", function () {
      // Ensure ScrollTrigger is registered
      gsap.registerPlugin(ScrollTrigger);
    
      // Debugging: Log to confirm the script is running
      console.log("GSAP and ScrollTrigger are loaded");
    
      // Select the #fanta element
      const fanta = document.querySelector("#fanta");
    
      // Check if #fanta exists in the DOM
      if (!fanta) {
        console.error("#fanta element not found in the DOM");
      } else {
        console.log("#fanta element found:", fanta);
      }
    
      // First GSAP animation for the fanta image
      gsap.to("#fanta", {
        scrollTrigger: {
          trigger: ".three", // Trigger animation when .three section is in view
          start: "top 80%", // Start animation when top of .three reaches 80% of viewport height
          end: "top 20%", // End animation when .three reaches 20% of viewport height
          scrub: true, // Smooth scrolling effect
          
        },
        top: "260%", // Updated to 260% (moved less vertically down)
        left: "30%", // Move the image horizontally to the right
        ease: "power2.inOut", // Smooth easing
        scale: 1, // Scale up the image
        duration: 2, // Animation duration
      });
      
      // Second GSAP animation for the cards
      const cards = document.querySelectorAll(".keypoints .card, .keypoints .card1");
      
      // Check if cards exist in the DOM
      if (cards.length === 0) {
        console.error("No cards found in the DOM");
      } else {
        console.log("Cards found:", cards);
      }
      
      // Add card animations
      cards.forEach((card, index) => {
        let fromProps = {}; // Starting properties
        let toProps = {}; // Ending properties
      
        // Define different animations for each card
        switch (index) {
          case 0: // First card (.card1)
            fromProps = { x: 0, y: 0, scale: 1, opacity: 0 }; // Start from original position (hidden)
            toProps = { x: 500, y: 200, scale: 1.2, opacity: 1 }; // Move diagonally to the right-down corner (visible)
            break;
          case 1: // Second card
            fromProps = { x: 0, y: 0, scale: 1, opacity: 0 }; // Start from original position (hidden)
            toProps = { x: -250, y: -100, scale: 1.2, opacity: 1 }; // Move diagonally to the left-up corner (visible)
            break;
          case 2: // Third card (middle)
            fromProps = { x: 0, y: 0, scale: 1, opacity: 0 }; // Start from original position (hidden)
            toProps = { x: 50, y: -220, scale: 1.2, opacity: 1 }; // Move up slightly (visible)
            break;
          case 3: // Fourth card
            fromProps = { x: 0, y: 0, scale: 1, opacity: 0 }; // Start from original position (hidden)
            toProps = { x: 330, y: -120, scale: 1.2, opacity: 1 }; // Move diagonally to the right-up corner (visible)
            break;
          case 4: // Fifth card
            fromProps = { x: 0, y: 0, scale: 1, opacity: 0 }; // Start from original position (hidden)
            toProps = { x: -500, y: 220, scale: 1.2, opacity: 1 }; // Move diagonally to the left-down corner (visible)
            break;
        }
      
        // Apply GSAP animation with ScrollTrigger
        gsap.fromTo(
          card,
          {
            ...fromProps, // Starting properties
          },
          {
            ...toProps, // Ending properties
            scrollTrigger: {
              trigger: card,
              start: "top 80%", // Start animation when the top of the card is 80% in view
              end: "top 10%",
              scrub: true,  // End animation when the top of the card is 20% in view
              toggleActions: "restart none reverse none", // Play on enter, reverse on leave
              
            },
            duration: 0.5, // Animation duration
          }
        );
      });
     
    });

    