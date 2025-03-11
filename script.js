(function() { 

  document.addEventListener('DOMContentLoaded', function() {
  });

});

let optionsCB = document.getElementsByClassName("option-cb"); 
for (let cb of optionsCB) {
  cb.addEventListener("click", function(e){
    e.preventDefault();
    for (let item of optionsCB) {
      if (item != cb && item.classList.contains("option-selected")) return;
    }
    cb.classList.toggle("option-selected");
  });
}