it("adds new ninja account to 1password", function() {
    var i;

    cy.visit(
      "https://my.1password.com/vaults/peb53ffvl4fbeqypatnoh6mg7u/allitems/zbxudrnddjdf7it7r57kecql7y"
    );

    cy.get("#email").type('jem@supapass.com');

    cy.get("#account-key").type('A3-W66B7J-QCBYMX-N3CHB-EL4T5-2HDF6-6WMZJ');
    //need to make this more secure lol

    cy.get("#master-password").type("444Milliondollars");
    cy.get(".new-button").click();

    cy.wait(10000)

    for (i = 446; i < 451; i++) {
      cy.get(".add").click();

      cy.get(".toolbar > ul > :nth-child(1) > span").click();

      //title
      cy.get("h1 > input").type("Fan  " + i);

      // //username
      cy.get(
        ".section-username-password > tbody > .field.string > .value > .value-input"
      ).type("fan+" + i + "@supapass.com");

      // //password
      cy.get(".field.concealed > .value > .value-input").type("password123");

      cy.get(".save").click();
      cy.wait(5000)
    }
  });