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
    cy.get("input[type=text]").type("jem@supapass.com");

    cy.get("input[type=password]")
      .type("1million")
      .should("have.value", "1million");

    cy.contains("Login with Email").click();

    //gotta update the number!!!
    var num = 13174;
    var name = "samuelholland19 ";

    var listOfNames = [
      
      "Simon.Tarver",
      "1",
      "2",
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
      "vinczenova.b"
      
    ];
    listOfNames.forEach(function(element) {
      cy.visit("https://supapass.com/admin/mbaso/subscriptions/add");

      cy.get("#edit-active").click();

      cy.get("#edit-fan-uid").type(element + "(" + num + ")");

      cy.get("#edit-channel-uid").type("DisrupTeK (7466)");

      cy.get("#edit-start-date-datepicker-popup-0").click();

      //start date
      cy.get(".ui-datepicker-days-cell-over > .ui-state-default").click();

      //end dateloop
      cy.get("#edit-end-date-datepicker-popup-0").click();
      
        cy.get(".ui-datepicker-next > .ui-icon").click(); //1
        cy.get(".ui-datepicker-next > .ui-icon").click(); //2
        cy.get(".ui-datepicker-next > .ui-icon").click(); //3
        cy.get(".ui-datepicker-next > .ui-icon").click(); //4
        cy.get(".ui-datepicker-next > .ui-icon").click(); //5
        cy.get(".ui-datepicker-next > .ui-icon").click(); //6
        cy.get(".ui-datepicker-next > .ui-icon").click(); //7 
        cy.get(".ui-datepicker-next > .ui-icon").click(); //8
        cy.get(".ui-datepicker-next > .ui-icon").click(); //9
        cy.get(".ui-datepicker-next > .ui-icon").click(); //10
        cy.get(".ui-datepicker-next > .ui-icon").click(); //11
        cy.get(".ui-datepicker-next > .ui-icon").click(); //12
        cy.get(".ui-datepicker-next > .ui-icon").click(); //13
       
    

      cy.get(":nth-child(4) > :nth-child(4) > .ui-state-default").click;
      cy.get("#edit-period-month").type("1");

      cy.get("#edit-payment-type").select("Ninja Pass (Points)");

      cy.get("#edit-submit").click();

      num++;
    });
  });
});
