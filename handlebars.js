$(function () {
  // Grab the template script
  var theTemplateScript = $("#address-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "firstName": "Dave",
    "lastName": "Beck",
    "currentAddress": "1123 3rd St. NE Minneapols, MN",
    "age" : 24,
    "numCats" : 2,
    "firstCat" : "Roan",
    "secondCat" : "Pancakes",
    placesLived: [ 
          { city: "Alexandria", state: "Minnesota", year: 1991},
          { city: "Glenwood", state: "Minnesota", year: 1999},
          { city: "Fargo", state: "North Dakota", year: 2009},
          { city: "Duluth", state: "Minnesota", year: 2010},
          { city: "Savage", state: "Minnesota", year: 2014},
          { city: "St. Cloud", state: "Minnesota", year: 2015},
          { city: "Minneapolis", state: "Minnesota", year: 2015}
        ],
    hobbies: [
          {hobby: "writing music"},
          {hobby: "playing guitar"},
          {hobby: "gardening"},
          {hobby: "woodworking"},
          {hobby: "video games"},
    ],
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});
