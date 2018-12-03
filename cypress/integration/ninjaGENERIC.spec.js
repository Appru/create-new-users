describe("create a ninja account", function() {
  //replace the 'i=0' with what ever fan account your on
  //replace 'jem' with fan or whatever you want
  //can change the password too

  //make sure to change value of usernames and passwords to that of your own

  it("creates ninja account", function() {
    //////////////////CHANGE THESE VARIABLES EVERY TIME////////////////
 
var i;
var num = 12350;
    ///////////////////////////////////////////////////////////
    cy.visit("https://supapass.com/login");

    cy.get("#edit-mail").type("jem@supapass.com");

    cy.get("input[type=password]").type("1million");

    cy.contains("Login with Email").click();

   //for( i= 22;i<26;i++){

   
        cy.visit("https://supapass.com/admin/people/create");
        cy.wait(100)

        cy.get("#edit-name").type('demo_account'+num);

        cy.get("#edit-mail").type('demo_account'+i+'@supapass.com');

        cy.get("#edit-pass-pass1").type("supapass");

        cy.get("#edit-pass-pass2").type("supapass");

        cy.get("#edit-roles-145878930").click();

        cy.get("#edit-submit").click();
  // }
      });
    });
    

//22,23,24,25,26