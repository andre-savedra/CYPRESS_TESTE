import * as GETCargos from '../requests/GetCargos';

describe('GET ALL CARGOS', ()=>{
    it('Get cargos', ()=>{
        GETCargos.allCargos().should((response) =>{
            cy.log(response)
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
            expect(response.body.data[0].nome).to.eq('Aluno');

        })
    })

    }
);

