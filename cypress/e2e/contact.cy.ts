describe('Contact section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays a list of contact cards', () => {
    cy.contains('Liens et contact');
    cy.get('app-contact ion-card.info').eq(2).should('contain', 'Github');
  });
});
