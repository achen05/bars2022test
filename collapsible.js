var collapsible = document.getElementsByClassName("collapsible");

for (var index = 0; index < collapsible.length; index++) {
  function expand() {
    var collapsibleContent = this.nextElementSibling;
    if (collapsibleContent.style.maxHeight){
      collapsibleContent.style.maxHeight = null;
      collapsibleContent.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
      this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    }
    else {
      collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
      collapsibleContent.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      this.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
  }
  collapsible[index].addEventListener("click", expand);
}
