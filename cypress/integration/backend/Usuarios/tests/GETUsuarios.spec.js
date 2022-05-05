import * as GETUsuarios from '../requests/GETUsuarios';
import * as Login from '../requests/POSTLogin';

describe('GET Usuarios', ()=>{
    it('login and get users', ()=>{
        Login.makeLogin('teste', '@Senaimange').then((respLogin)=>{
            cy.log(respLogin)            
            GETUsuarios.allUsuarios(respLogin.body.auth_token)
            .should((response)=>{
                expect(response.status).to.eq(200);
                expect(response.body).to.be.not.null;
                cy.log(response.body.data)
            })  
        })
    })
    it('error in login', ()=>{
        Login.makeLogin('teste', 'senhaErrada').then((respLogin)=>{
            cy.log(respLogin)            
            GETUsuarios.allUsuarios(respLogin.body.auth_token)
            .should((response)=>{
                expect(response.status).to.eq(401);
            })  
        })
    })
})