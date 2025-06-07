describe('CV App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays header title', () => {
    cy.get('app-header .nom').should('contain', 'Nicolas Barrat');
  });

  it('opens external PDF link', () => {
    cy.get('ion-icon[name="document-text"]').parent('ion-button')
      .should('have.attr', 'href', 'https://nicob.ovh/cv/pdf');
  });

  it('navigates with the menu', () => {
    cy.get('ion-menu-button').click();
    cy.contains('ion-item', 'Contact').click();
    cy.get('#contact').should('be.visible');
  });
});
