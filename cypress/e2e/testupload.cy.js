///<reference types="cypress"/>
/// <reference types="cypress-downloadfile"/>


it('testing upload',()=>{
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')
})  

it('testing download',()=>{
   cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})