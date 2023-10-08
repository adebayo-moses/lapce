import "./style.css";

alert("moses");

// Initialize Lottie
const animationContainer = document.getElementById("lottie-container");
const animationOptions = {
  container: animationContainer,
  renderer: "svg", // Change to "canvas" if needed
  loop: true, // Set to false if you don't want loop
  autoplay: false, // Do not autoplay initially
  path: "https://wiicreate.com/assets/documents/Hero-Animation.json", // Replace with the URL to your Lottie JSON file
};
const animation = lottie.loadAnimation(animationOptions);

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create a ScrollTrigger to play the animation on scroll
ScrollTrigger.create({
  trigger: animationContainer,
  start: "top center", // Adjust as needed
  end: "bottom center", // Adjust as needed
  animation: animation,
  scrub: true, // Smooth scrubbing effect
  markers: true, // Remove this line in production
});
