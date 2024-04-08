class Buttons{
    universalButton(text){
        return cy.get('.oxd-button').contains(text)
        .first()
        .click()
    }
    sidebarMenu(text){
        return cy.get('span.oxd-main-menu-item--name').contains(text)
        .click()
    }
    editButton(){
        return cy.get('.oxd-table-cell-actions > :nth-child(2)').eq(0)
        .click({force: true})
    }
    deleteButton(){
        return cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').eq(4)
        .click({force: true})
    }
    deleteButton2(){
        return cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon')
        .click({force: true})
    }
    confirmDelete(){
        return cy.get('.oxd-button--label-danger')
        .click()
    }
    clickPicture(){
        return cy.get('i.oxd-icon.bi-plus')
        .click()
    }
    uploadPicure(){
        return cy.get('input[type="file"]')
        .selectFile('./cypress/fixtures/IMG_3872.JPG', {force:true})
    }
}
export default Buttons