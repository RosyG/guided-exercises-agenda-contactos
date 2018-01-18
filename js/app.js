
  //Traer elementos del HTML
  //
  var $nameInput = $("#name-input");  // nombre
  var $phoneInput = $("#phone-imput");  // telefono

  function loadPage () {
    $(".modal").modal();  // se mandan llamar a la clase modal, que despliega las cajas contenedoras
    $nameInput.keyup(validateContact); // validar que el usuario ingrese datos. Que este tecleando un nombre
    $phoneInput.keyup(validateContact); // validar que el usuario ingrese datos. Que este tecleando números


    $("searcher").keyup(filterContacts);
  };

  var paintContactsInHTML = function(contact) {

    /* Crear elementos con DOM html al publicar contacto */


    //Asignando atributos y/o eventos


    /* Asignando valores a los elementos*/


    //Agregamos lo que creamos con el DOM a un elemento existente del HTML

  };

  var addContact = function (e) {
    e.preventDefault();
    //Las siguientes lineas toman el valor que el usuario agrega en los inputs y los guardan en variables


    //Con las variables separadas que obtuvimos creamos una estructura de datos unica, un objeto por cada contacto


    /*Agregamos el contacto a nuestra data (arreglo declarado) para poderla filtrar y eliminar posteriormente*/

    //La siguiente funcion se encarga de pintar los contactos en el html

    /* Limpiando valores de formulario*/

  };

  var validateContact = function () {
  //En esta funcion tenemos que validar que el usuario ingrese datos y no valores vacios
    var $containerAddContact = $("#add-contact")
    if($(this).val().trim().length > 0){   // trim elimina los espacios en blanco en ambos extremos del string.
      $containerAddContact.removeAttr("disabled");
    } else {
      $containerAddContact.Attr("disabled", true);
    }
  };



    function filterContacts() {
      /*Los filtros devuelven arreglos*/
      //Esta funcion debe de filtrar la data segun el valor que el usuario ingrese en el input de busqueda
      var $searchContact = $("#seacher"). val().toLowerCase();
      /*Se necesita comparar con la data que ya se tiene*/
      if ($("#searcher").val().trim().length > 0) {
        var filteredContacts = contacts.filter(function(contact){
          return contact.name.toLowerCase().indexOf(searchContact) >= 0;
        });
        $("#publish-contacts").empty();
        filteredContacts.forEach(function(contact){
          paintContactsInHTML(contact);
        })
      }
    };


  var removeContact = function () {
    //esta funcion como primer alcance debe de poer borrar la tarjeta que se crea desde el DOM
    //como segundo alcance borrar el elemento de la data
  };




  $(document).ready(loadPage);
