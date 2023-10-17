///<reference types="cypress"/>

it('readand write', ()=>{
    cy.fixture('example.json').then((data)=>{
        cy.log(data.name)
    })
})

it(' write', ()=>{
    cy.fixture('example.json').then((data)=>{
        cy.writeFile('sample.txt','hey this is sample text')
    })
})