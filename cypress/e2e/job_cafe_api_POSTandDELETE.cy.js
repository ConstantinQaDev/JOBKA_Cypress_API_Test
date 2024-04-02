///<reference types = "Cypress"/>

import { data } from "../fixtures/params.json";

describe("Get Jobka Jobs Test", () => {
    // let positionBody = {
    //   position: "SDET",
    //   company: "mycompanyCOSTA",
    //   location: "Vancouver",
    //   seniority: "junior",
    //   link: "www.linkedin.com",
    //   description: "some text",
    //   time: "two hours ago",
    //   salary: "100k",
    //   date: "2020-06-06T12:00:00",
    // };

  let adminKey = "adminadmin";
  let id;

    // it("should create job listings", () => {
    //   cy.request({
    //     method: "POST",
    //     url: "/create",
    //     body: positionBody,
    //     qs: { key: adminKey },
    //   }).then((response) => {
    //     console.log(response.body);
    //     id = response.body.id;
    //     expect(response.status).equal(201);
    //     expect(response.body.company).equal("mycompanyCOSTA");
    //   });
    // });

  it("should create job listings from Fixtures", () => {
    data.forEach((element) => {
      cy.request({
        method: "POST",
        url: "/create",
        body: element,
        qs: { key: adminKey },
      }).then((response) => {
        console.log(response.body);
        id = response.body.id;
        expect(response.status).equal(201);
        expect(response.body.company).equal(element.company);

cy.request(`/?position=${element.position}&company=${element.company}`)
        .then((searchResponse)=>{
            expect(searchResponse.status).to.equal(200);
            expect(searchResponse.body).to.be.an('object').that.is.not.empty;
        })

        cy.deletePositionById(id);
      });
    });
  });

  afterEach(() => {
    cy.deletePositionById(id);
  });
});
