document.addEventListener("DOMContentLoaded", function() {
  
  let canOpen = true;
  
  const cv = document.querySelector("#cv");
  cv.addEventListener("mouseenter", function() {
    if (canOpen) {
      this.classList.add("new"); 
    }
  });
  
  const contentP = document.querySelectorAll("#content p");
  
  const refresh = document.querySelector("#content .fa-refresh");
  refresh.addEventListener("mouseenter", function() {
    this.classList.add("fa-spin");  
  });
  
  refresh.addEventListener("mouseleave", function() {
    this.classList.remove("fa-spin");  
  });
  
  refresh.addEventListener("click", function() {
    contentP.forEach(p => {
      p.style.display = "block";
    });
  });
  
  contentP.forEach(p => {   
    const closeIcon = document.createElement("i");
    closeIcon.classList.add("fa-solid","fa-close");
    p.appendChild(closeIcon);   
  });
  
  document.querySelectorAll("#content p .fa-close").forEach(icon => {
    icon.addEventListener("click", function() {
      this.closest("p").style.display = "none";  
    });
  });
  
  document.querySelector("h5 i").addEventListener("click", () => {
    contentP.forEach(p => {   
      p.style.display = "block";
    });  
  });
  
  const close = document.querySelector("#close");
  close.addEventListener("click", () => {
    cv.classList.remove("new"); 
    canOpen = false;
  });
  
  const book = document.querySelector(".book");
  book.addEventListener("mouseleave", () => {
    canOpen = true;
  });
  
});