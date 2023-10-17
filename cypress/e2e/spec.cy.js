describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://stagingapp.vahak.in/')
    cy.wait(5000)
    // cy.contains('Allow').click()
    // cy.wait(5000)
    cy.get('.loginSignupBtn > .AppBtn-module_main__WdRNz').click()
    //cy.contains('signup').click()
  

    cy.get('.PhoneNumForm-module_main__qGY1a > :nth-child(1) > .helper-module_center_vertical__miCS- > .AppInput-module_input_wrapper__ppBAL > .AppInput-module_input__rOFKz').type("7975078414")
    
    cy.contains('Next').click()
    cy.get('.OtpInput-module_otpInputsWrap__o5Hix > :nth-child(1)').type("1")

    cy.get('.OtpInput-module_otpInputsWrap__o5Hix > :nth-child(2)').type("1")

    cy.get('.OtpInput-module_otpInputsWrap__o5Hix > :nth-child(3)').type("1")

    cy.get('[maxlength="1"]').type("1")

    cy.contains('Next').click()

    cy.contains('Marketplace').click()

    //cy.get('.DesktopHeader_searchInputBox__taD4a > .helper-module_center_vertical__miCS- > .AppInput-module_input_wrapper__ppBAL > .AppInput-module_input__rOFKz > .rbt > [style="display: flex; flex: 1 1 0%; height: 100%; position: relative;"] > #dest-search').type("Mysuru")

    //cy.go("back")

    cy.contains('Home').click()

   cy.get(':nth-child(1) > .AdditionalServices_iconWrapper__wk5Il').click()


  })
})