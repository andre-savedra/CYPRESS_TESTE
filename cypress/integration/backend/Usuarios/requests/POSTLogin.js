/// <reference types="cypress" />

function makeLogin(user, pass){
    const credentials = {
        username: user,
        password: pass
    }

    return cy.request({
        method: 'POST',
        url: 'api/v1/auth/token/login/',
        failOnStatusCode: false,
        headers: {
            'Content-Type': 'application/json'
        },
        body: credentials
    })

}

export { makeLogin };