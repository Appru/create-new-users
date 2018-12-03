describe("create a ninja account", function() {
  //replace the 'i=0' with what ever fan account your on
  //replace 'jem' with fan or whatever you want
  //can change the password too

  //make sure to change value of usernames and passwords to that of your own

  it("creates ninja account", function() {
    //////////////////CHANGE THESE VARIABLES EVERY TIME////////////////
    var i;

    ///////////////////////////////////////////////////////////
    cy.visit("https://supapass.com/login");

    cy.get("#edit-mail").type("jem@supapass.com");

    cy.get("input[type=password]").type("1million");

    cy.contains("Login with Email").click();

    var listOfemails = [
      "Simon.Tarver@primeast.com",
      "David.evans@primeast.com",
      "Simon.allistone@primeast.com",
      "KarenC@elevatorUK.com",
      "johnh@elevatoruk.com",
      "pamela@elevatoruk.com",
      "hannahckemp@aol.com",
      "charlotte.hardwidge97@gmail.com",
      "deanh65@virginmedia.com",
      "mark.johns03@gmail.com",
      "james.hinchcliffe@aol.com",
      "nikitta0304@gmail.com",
      "shanengetaw@stanbic.com",
      "labib.mnf@gmail.com",
      "vinczenova.b@gmail.com"
    ];

    var listOfNames = [
      "Simon.Tarver",
      "David.evans",
      "Simon.allistone",
      "KarenC1",
      "johnh1",
      "pamela3",
      "hannahckemp",
      "charlotte.hardwidge97",
      "deanh65",
      "mark.johns03",
      "james.hinchcliffe",

      "nikitta0304",
      "shanengetaw",
      "labib.mnf",
      "vinczenova.b",
     
    ];

    
      listOfemails.forEach(function(email,name) {
        

        cy.visit("https://supapass.com/admin/people/create");

        cy.get("#edit-name").type(name);

        cy.get("#edit-mail").type(email);

        cy.get("#edit-pass-pass1").type("password123");

        cy.get("#edit-pass-pass2").type("password123");

        cy.get("#edit-roles-145878930").click();

        cy.get("#edit-submit").click();
      });
    });
  });

