///<reference types = "Cypress"/>

describe('Get Jobka Jobs Test', () => {

  it('get all jobs', () => {
    cy.request('/').then((response)=>{
      console.log(response);
      expect(response.status).equal(200),
      expect(response.statusText).equal("OK")
    });
  });

  xit('should verify job result list', () => {
    cy.request('/').then((response)=>{
      console.log(response.body.content),
      expect(response.body.content).not.empty
    });
  });

  xit('should have all the details for every job', () => {
    cy.request('/').then((response)=>{
      console.log(response.body.content),
      expect(response.body.content[0]).have.property('id'),
      expect(response.body.content[0].id).not.null,
      expect(response.body.content[0].id).equal('654286613f7d791f7b3e7b20')

      expect(response.body.content[0]).have.property('position'),
      expect(response.body.content[0].position).not.null,
      expect(response.body.content[0].position).equal('Senior Identity Analyst')

      expect(response.body.content[0]).have.property('company'),
      expect(response.body.content[0].company).not.null,
      expect(response.body.content[0].company).equal('Nicolas Inc')

      expect(response.body.content[0]).have.property('location'),
      expect(response.body.content[0].location).not.null,
      expect(response.body.content[0].location).equal('Maricopa')

    });
  });

  xit('should have all the details for every job', () => {
    cy.request('/').then((response)=>{

      var result = response.body.content[1]
      console.log(response)
      expect(result).have.property('id')
      expect(result.id).equal('65428d7c3f7d791f7b3e7b62')

      expect(result).have.property('location')
      expect(result.location).equal('New Guiseppe')

      expect(result).have.property('position')
      expect(result.position).equal('Global Web Designer')

      expect(result).have.property('link')
      expect(result.link).contain('http')

    });
  });

  xit('should search jobs by location', () => {
    cy.request('/?location=Toronto').then((response)=>{

      let resultsList = response.body.content

      console.log(resultsList)
      expect(response.status).equal(200)

      for (let i = 0; i < resultsList.length; i++){
        expect(resultsList[i].location).equal('Toronto, ON, Canada')
      }

    });
  });
});