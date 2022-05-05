/// <reference types="cypress" />

function allCargos(){
    return cy.request({
        method: 'GET',
        url: 'cargos',
        failOnStatusCode: false
    })
}
export { allCargos };