$(document).ready(function() {
  // var input = {};
  $("#button").on("click", function(){
    var firstName = $("#firstName").val();
    var middleName = $("middleName").val();
    var lastName = $("#lastName").val();
    var idNumber = $("#idNumber").val();
    var jobTitle = $("#jobTitle").val();
    var annualSalary = $("#annualSalary").val();
    // input.monthlySalary = input.annualSalary / 12;
    // $("#firstName").val("");
    // $("#lastName").val("");
    // $("#idNumber").val("");
    // $("#jobTitle").val("");
    // $("#annualSalary").val(""); //ask Louis why this didn"t work with the bottom code and examples from lecture??
  });

  console.log();

  //following code is from what I learned during Monday"s lecture and practiced during the peer work, written by me and edited to fit this project
  // adds new employee row to DOM. Append expects a string, converts to HTML
  $("#resultTable").append(
    "<tr>" +
    "<td>" + firstName + "</td>" +
    "<td>" + middleName + "</td>" +
    "<td>" + lastName + "</td>" +
    "<td>" + idNumber + "</td>" +
    "<td>" + jobTitle + "</td>" +
    "<td>" + annualSalary + "</td>" +
    "</tr>"
  );
  console.log(resultTable); //here I am getting a log & HTML disply of [object HTMLInputElement] in each input result field. Not sure how to fix.

  var newEmpMonthExp = annualSalary / 12;
var previousMonthExp = $("#monthExp").text();
var totalMonthExp = parseFloat(previousMonthExp) + newEmpMonthExp;
$("#monthlyExpenses").text(totalMonthExp);


  // $("#clear").on("click", function(){
  //   // find table container, call in jQuery, append variables
  //   $("#nameContainer" ).empty();
  // });




//   function{
//     zebraRows("tbody tr:odd td", "odd");
//   };
//   function zebraRows(selector, className) {
//     $(selector).removeClass(className).addClass(className);
//     $("tbody tr").hover(function(){
//       $(this).find("td").addClass("hovered");
//     }, function(){
//       $(this).find("td").removeClass("hovered");
//     });
// });

});








// put in a warning dialogue box that says
// "Are you sure you want to delete " + firstName + lastName + " from this list?"
