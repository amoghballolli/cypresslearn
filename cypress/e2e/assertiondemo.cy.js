it('AssertionDemo', () => {
    cy.visit('https://stagingapp.vahak.in/')
    cy.wait(5000)
    //cy.contains('Allow').click()
    cy.wait(5000)
    cy.get('.loginSignupBtn > .AppBtn-module_main__WdRNz').click()
    //cy.contains('signup').click()
  

    cy.get('#auth_textf_phoneNumber').type("7975078414")
    cy.get('#auth_btn_submit').click()
    //cy.contains('Next').click()
    cy.get('[data-testid="auth_textf_otp-0"]').type("1")
    //cy.get('.OtpInput-module_otpInputsWrap__o5Hix > :nth-child(1)').type("1")
    cy.get('[data-testid="auth_textf_otp-1"]').type("1")
    //cy.get('.OtpInput-module_otpInputsWrap__o5Hix > :nth-child(2)').type("1")
    cy.get('[data-testid="auth_textf_otp-2"]').type("1")
    //cy.get('.OtpInput-module_otpInputsWrap__o5Hix > :nth-child(3)').type("1")
    cy.get('[data-testid="auth_textf_otp-3"]').type("1")
    //cy.get('[maxlength="1"]').type("1")

    // cy.contains('verify OTP', {timeout :5000}).click()

    cy.get('.BannerSection_text__pO526 > :nth-child(1)').should('be.visible')

    assert.equal(4,4, 'NOT EQUAL')
}
)