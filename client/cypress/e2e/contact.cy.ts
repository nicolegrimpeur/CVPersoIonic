describe('Contact section', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays a list of contact cards', () => {
    cy.contains('Liens et contact');
    cy.get('app-contact ion-card.info').should('have.length', 4);
  });

  // Recherche par contenu plutôt que par position, pour ne pas casser
  // si l'ordre des contacts change dans shared/informations/contact.ts.
  // href="{{carte.href}}" est lié en propriété sur IonButton (pas en attribut),
  // d'où have.prop et non have.attr.
  it('links to the Github profile', () => {
    cy.contains('app-contact ion-card.info', 'Github')
      .find('ion-button')
      .should('have.prop', 'href', 'https://github.com/nicolegrimpeur');
  });
});
