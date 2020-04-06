
function place(name, when, landmark, visit) {
  this.name = name;
  this.when = when;
  this.landmark = landmark;
  this.visit = visit;
}

seattle = new place("Seattle", "2008-2017", "Space Needle", "Yes");
sanDiego = new place("San Diego", "Fall 2019", "La Jolla Beaches", "Yes");
phillippines = new place("Phillippines", "2018-2019", "Boracay", "No");
kualaLumpur = new place("Kuala Lumpur", "Summer 2019", "Batu Caves", "Yes");

var places = [seattle, sanDiego, phillippines, kualaLumpur];
var listHtml = new String;
places.forEach(function(element) {
  listHtml += "<li id='" + element.name + "'>" + element.name + "</li>" 
})

function lookUpLocation(name) {
  for (var i = 0; i < places.length; i++){
    if (places[i].name == name) {
      return places[i];
    }
  }
}

$(document).ready(function() {
  $("#list-of-places").html(listHtml);
  $("#list-of-places").on("click", "li", function() {
    var clickedLocation = lookUpLocation(this.id)
    var newHtml = ("Location: " + clickedLocation.name + " | When I was there: " + clickedLocation.when + " | Local Landmark: " 
    + clickedLocation.landmark + " | Would I go again/recommend it? " + clickedLocation.visit + ".");
    $("#details").text(newHtml);
  })

});

//PLACES I'VE VISITED ^
//###################################################################################################################################
//TO-DO LIST V

listOfTasks = []; 

function task(descrip) {
  this.descrip = descrip;
}

function addNewEntry() {

  listOfTasks.push(new task($("#new-entry").val()));
  for (i = 0; i < listOfTasks.length; i++) {
    console.log(listOfTasks[i].descrip)
  }
}

$(document).ready(function() {
  $("form#to-do-list").submit(function(event) {
    event.preventDefault();
    addNewEntry();
  })

});




// function addNewEntry() {
//   $("#tasks").append(`<li> ${$("#new-entry").val()} <button class="remove">Done/Remove</button></li>`);
// }

// $(document).ready(function() {
//   $("form#to-do-list").submit(function(event) {
//     event.preventDefault();
//     addNewEntry();
//   })

//   $("ul#tasks").on("click", "li", function() {
//     this.remove();
//   })  

// });