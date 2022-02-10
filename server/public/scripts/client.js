console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
}

function getKoalas(){
  console.log( 'in getKoalas' );
  $.ajax({
    type: 'GET',
    url: '/koala'
  }).then(function(response) {
    console.log(response);
    for (let i= 0; i<response.length; i++){ 
      $('#viewKoalas').append(`
        <td>${response[i].name}</td>
        <td>${response[i].age}</td>
        <td>${response[i].gender}</td>
        <td>${response[i].ready-for-transfer}</td>
        <td>${response[i].notes}</td>
        <td><button class="btn-delete" data-id=${response[i].id}>Delete</button>
        <button class="btn-ready" data-id=${response[i].id}>Ready for Transfer</button></td>
  `)}.catch(function(error){
    console.log('error in GET', error);
  });
}
 // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
 
}




function postKoala() {
  let koalaToAdd = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    transfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val()
  }
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: koalaToAdd,
    }).then(function(response) {
      console.log('Response from server.', response);
      //empty inputs
      $('#nameIn').val(''),
      $('#ageIn').val(''),
      $('#genderIn').val(''),
      $('#readyForTransferIn').val(''),
      $('#notesIn').val('')

      // append to DOM with a function here

    }).catch(function(error) {
      console.log('Error in POST postKoala()', error)
      alert('Unable to add koala at this time. Please try again later.');
    });
}// end postKoala
