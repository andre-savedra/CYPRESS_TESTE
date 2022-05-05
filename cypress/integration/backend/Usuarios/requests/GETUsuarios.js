/// <reference types="cypress" />

function allUsuarios(token){
    return cy.request({
        method: 'GET',
        url: 'usuarios',
        failOnStatusCode: false,
        headers: {
            'Authorization': `Token ${token}`
        }
     }
    )
}
export { allUsuarios }