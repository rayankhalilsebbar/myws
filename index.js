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