console.log("js");

$(document).ready(function () {
  console.log("JQ");
  // Establish Click Listeners
  setupClickListeners();
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', postKoala);
    console.log( 'in addButton on click' );

    $('#viewKoalas').on('click', '.btn-nothing', handleErrorMessage);
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object

    // old code below
//     let koalaToSend = {
//       name: 'testName',
//       age: 'testName',
//       gender: 'testName',
//       readyForTransfer: 'testName',
//       notes: 'testName',
//     };
//     // call saveKoala with the new obejct
//     saveKoala( koalaToSend );
//   }); 
}

function getKoalas() {
  console.log("in getKoalas");
  $('#viewKoalas').empty();
  $.ajax({
    type: "GET",
    url: "/koalas",
  })
    .then(function (response) {
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        $("#viewKoalas").append(`<tr>
            <td>${response[i].name}</td>
            <td>${response[i].age}</td>
            <td>${response[i].gender}</td>
            <td>${response[i]["ready-for-transfer"]}</td>
            <td>${response[i].notes}</td>
            <td><button class="btn-nothing" data-id=${response[i].id}>Delete</button></td>
            <td><button class="btn-nothing" data-id=${response[i].id}>Ready for Transfer</button></td>
        </tr>
  `);
      }
    })
    .catch(function (error) {
      console.log("error in GET", error);
    });
  // end getKoalas
}

function saveKoala(newKoala) {
  console.log("in saveKoala", newKoala);
  // ajax call to server to get koalas
}

function postKoala() {

    if (
        $("#nameIn").val() === '' ||
        $("#ageIn").val() === '' ||
        $("#genderIn").val() === '' ||
        $("#readyForTransferIn").val() === '' ||
        $("#notesIn").val() === ''
    ) {
        alert('You must fill out the entire form.');
        return;
    }

  let koalaToAdd = {
    name: $("#nameIn").val(),
    age: $("#ageIn").val(),
    gender: $("#genderIn").val(),
    transfer: $("#readyForTransferIn").val(),
    notes: $("#notesIn").val(),
  };
  $.ajax({
    method: "POST",
    url: "/koalas",
    data: koalaToAdd,
  })
    .then(function (response) {
      console.log("Response from server.", response);
      //empty inputs
      $("#nameIn").val(""),
        $("#ageIn").val(""),
        $("#genderIn").val(""),
        $("#readyForTransferIn").val(""),
        $("#notesIn").val("");

      // append to DOM with a function here
      getKoalas();
    })
    .catch(function (error) {
      console.log("Error in POST postKoala()", error);
      alert("Unable to add koala at this time. Please try again later.");
    });
} // end postKoala

let animating = false;

function handleErrorMessage() {

    if (animating === false) {
        animating = true
        for (let i = 0; i < 200; i++) {
            setTimeout(() => {
                $('#error-popup').css('opacity', (1 - ((1 / 200) * i)));
            }, 10 * i);
        }
    
        setTimeout(() => {
            animating = false
        }, 2_000);
    }

    // $('#error-popup').attr('class', 'fade-out');
}
