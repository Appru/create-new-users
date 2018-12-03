describe("change the date", function() {
  it("right the wrongs", function() {

    cy.visit("https://supapass.com/login");

    cy.get("#edit-mail").type("jem@supapass.com");

    cy.get("input[type=password]").type("1million");

    cy.contains("Login with Email").click();

    cy.visit("https://supapass.com/admin/mbaso/subscriptions");

for( var i= 2; i<50; i++){


    cy.get(":nth-child("+i+") > .views-field-id > a").click();
   // cy.get(":nth-child(49) > .views-field-id").click();


    cy.get("#edit-end-date-datepicker-popup-0").click();
    cy.get(".ui-datepicker-next > .ui-icon").click();
    cy.get(".ui-datepicker-next > .ui-icon").click();
    cy.get(".ui-datepicker-next > .ui-icon").click();
    cy.get(".ui-datepicker-next > .ui-icon").click();
    cy.get(".ui-datepicker-next > .ui-icon").click();
    cy.get(".ui-datepicker-next > .ui-icon").click();

    cy.get(":nth-child(4) > :nth-child(6) > .ui-state-default").click({
      force: true
    });

    cy.get("#edit-submit").click();
    
  }
  });
});
