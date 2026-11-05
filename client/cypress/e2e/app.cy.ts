describe('CV App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays header title', () => {
    cy.get('app-header .nom').should('contain', 'Nicolas Barrat');
  });

  // Le PDF est servi par nginx sur /pdf (cf. nginx/nginx.conf)
  it('links to the PDF resume', () => {
    cy.get('app-accueil ion-button[title="CV au format PDF"]')
      .should('have.attr', 'href', '/pdf')
      .and('have.attr', 'target', '_blank');
  });
});
