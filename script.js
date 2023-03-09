/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "450px";
    document.getElementById("mySidepanel").style.padding = "10px";
    document.getElementById("mySidepanel").style.border = "1px solid black";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.padding = "0";
    document.getElementById("mySidepanel").style.border = "unset";
  }