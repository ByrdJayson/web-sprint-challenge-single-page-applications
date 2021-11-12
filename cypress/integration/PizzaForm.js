describe('Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })
    const nameInput = () => cy.get('input[name=name]');
    const banana = () => cy.get('input[name=banana]');
    const mushroom = () => cy.get('input[name=mushroom]');
    const olive = () => cy.get('input[name=olive]');
    const pineapple = () => cy.get('input[name=pineapple]')
    const foobarInput = () => cy.get('input[name=foobar]');
    const specialText = () => cy.get('textarea');

    it('sanity check', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(11);
        expect({}).not.to.equal({});
    })

    it('elements rendering to screen', () => {
        nameInput().should('exist');
        foobarInput().should('not.exist');
        banana().should('exist');
        mushroom().should('exist');
        olive().should('exist');
        pineapple().should('exist');
        specialText().should('exist');
        cy.contains('Place Order!').should('exist');

    })

    it('Inputs can be changed', () => {
        nameInput().type('Jayson');
        banana().click();
        mushroom().click();
        olive().click();
        pineapple().click();
        specialText().type('Please knock, the doorbell does not work!')
        nameInput().contains('Jayson').should('exist');

    })
})
