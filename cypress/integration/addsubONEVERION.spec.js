describe("adding subs to many  accounts", function() {
  //replace the 'i=0' with what ever fan account your on
  //replace 'jem' with fan or whatever you want
  //can change the password too

  //make sure to change value of usernames and passwords to that of your own

  it("^^", function() {
    //////////////////CHANGE THESE VARIABLES EVERY TIME////////////////

    //basbousa254@hotmail.com
    //k.bill@worc.ac.uk
    //megseventysix@hotmail.co.uk
    //antoan97@gmail.com
    //joanne.gaffney1@nhs.net
    //jason.garner86@gmail.com
    //jack@goddardconsultancy.co.uk
    //manda@mandagraham.co.uk
    //samuelholland19@gmail.com//////////
    //kirsty_hutton123@hotmail.co.uk
    //kumar_patel1@outlook.com
    //madj_16@uni.worc.ac.uk;
    //l.parfenie@worc.ac.uk
    //dan.ajmills@hotmail.co.uk
    //imi.mornement@hotmail.c
    //t.nahajski@worc.ac.uk
    //wynyawera@yahoo.co.uk
    //samantha@millbrookmarketing.co.uk
    //james.reade@smeadvisersltd.co.uk
    //pjbrowlands@gmail.com
    //camelia75ro@yahoo.co.uk
    //emily.shirley@hotmail.co.uk
    //niki_p1877@yahoo.com
    //andrew_turner17@uni.worc.ac.uk
    //sheelaskitchen439@gmail.com
    //awhittall2@gmail.com
    //lindyloo4@sky.com
    //markskoda@yahoo.co.uk
    //dufd1_15@uni.worc.ac.uk
    //keyableit@aol.com

    ///////////////////////////////////////////////////////////
    cy.visit("https://supapass.com/login");
    cy.get("#edit-mail").type("jem@supapass.com");

    cy.get("input[type=password]")
      .type("1million")
      .should("have.value", "1million");

    cy.contains("Login with Email").click();

    //gotta update the number!!!
    var num = 12060;
    var name = "samuelholland19 ";

    var listOfNames = [
      "kirsty_hutton123 ",
      "kumar_patel1 ",
      "madj_16 ",
      "l.parfenie ",
      "dan.ajmills ",
      "t.nahajski,wynyawera ",
      "samantha ",
      "james.reade ",
      "pjbrowlands ",
      "camelia75ro ",
      "emily.shirley ",
      "niki_p1877 ",
      "andrew_turner17 ",
      "sheelaskitchen439 ",
      "awhittall2 ",
      "lindyloo4 ",
      "markskoda ",
      "dufd1_15 ",
      "keyableit "
    ];

    for (var i = 22; i < 27; i++) {
      cy.visit("https://supapass.com/admin/mbaso/subscriptions/add");

      cy.get("#edit-active").click();

      cy.get("#edit-fan-uid").type("demo_account" + i + " (" + num + ")");

      cy.get("#edit-channel-uid").type("Blue Note (12310)");

      cy.get("#edit-start-date-datepicker-popup-0").click();

      cy.get(".ui-datepicker-days-cell-over > .ui-state-default").click();

      cy.get('#edit-end-date-datepicker-popup-0').click()
//end date picker
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();
cy.get(".ui-datepicker-next > .ui-icon").click();

 cy.get(":nth-child(4) > :nth-child(6) > .ui-state-default").click({
        force: true
      });

      cy.get("#edit-period-month").type("6");

      cy.get("#edit-payment-type").select("Ninja Pass (Points)");

       cy.get('#edit-submit').click()

      num++;
    }
  });
});
