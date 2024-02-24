const copyToClipboard = async () => {
    try {
      //const element = document.querySelector("rayan.khalilsebbar@gmail.com");
      await navigator.clipboard.writeText("rayan.khalilsebbar@gmail.com");
      console.log("Text copied to clipboard!");
      // Optional: Display a success message to the user
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      // Optional: Display an error message to the user
    }
  };

var string = "Hello! I'm Rayan :)"; /* type your text here */
var array = string.split("");
var timer;
  
function frameLooper () {
  if (array.length > 0) {
    document.getElementById("typing").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
      }
  loopTimer = setTimeout('frameLooper()',150); /* change 70 for speed */

}
frameLooper();
