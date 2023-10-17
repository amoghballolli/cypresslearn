import { Loginpage } from "./pages/loginpage.cy"

const pagetask = new Loginpage()

beforeEach(()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

describe('All login test cases', ()=>{

    it('test1', ()=>{
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        pagetask.enterUsername('Admin')
        pagetask.enterPassword('admin123')
        pagetask.clicklogin()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    
    })
    
    it('test2', ()=>{
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
         pagetask.enterUsername('Adminq')
        pagetask.enterPassword('admin1231')
        pagetask.clicklogin()
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    
    })
})
// it('test1', ()=>{
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     pagetask.enterUsername('Admin')
//     pagetask.enterPassword('admin123')
//     pagetask.clicklogin()
//     cy.get(':nth-child(1) > .oxd-main-menu-item').click()

// })

// it('test2', ()=>{
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     pagetask.enterUsername('Adminq')
//     pagetask.enterPassword('admin1231')
//     pagetask.clicklogin()
// cy.get(':nth-child(1) > .oxd-main-menu-item').click()

// })