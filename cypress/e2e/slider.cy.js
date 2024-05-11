describe('Swiper Gallery Test', function () {
    it('Checks if second slide contains "United Kingdom"', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    });
});

describe('Swiper Gallery Test', function () {
    it('Checks if third slide contains "Paris"', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-button-next').click();
        cy.wait(2000);
        cy.get('.swiper-button-next').click({force: true});
        cy.wait(2000);
        cy.get('.swiper-slide-active').should('contain', 'Paris');
    });
});

describe('Swiper Gallery Test', function () {
    it('If user can swipe', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
        cy.wait(2000);
        cy.get('.swiper-button-prev').click({force: true});
        cy.wait(2000);
        cy.get('.swiper-slide-active').should('contain', 'Italy');
    });
});

describe('Swiper Gallery Test', function () {
    it('All slides are correct', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-slide-active .card-description h1').should('contain', 'Rome');
        cy.get('.swiper-slide-active .card-description p').should('contain', 'Italy');

        cy.get('.swiper-button-next').click();

        cy.get('.swiper-slide-active .card-description h1').should('contain', 'London');
        cy.get('.swiper-slide-active .card-description p').should('contain', 'United Kingdom');

        cy.wait(2000);
        cy.get('.swiper-button-next').click({force: true});
        cy.wait(2000);

        cy.get('.swiper-slide-active .card-description h1').should('contain', 'Paris');
        cy.get('.swiper-slide-active .card-description p').should('contain', 'France');
    });
});

describe('Swiper Gallery Test', function () {
    it('Viewport simulation', function () {
        cy.visit('http://localhost:3000');
        cy.viewport('macbook-16');
        cy.wait(1000);
        cy.get('.swiper-button-next');
        cy.get('.swiper-button-prev');

        cy.viewport('ipad-mini');
        cy.wait(1000);
        cy.get('.swiper-button-next');
        cy.get('.swiper-button-prev');

        cy.viewport('iphone-8');
        cy.wait(1000);
        cy.get('.swiper-button-next');
        cy.get('.swiper-button-prev');

        cy.viewport('iphone-xr');
        cy.wait(1000);
        cy.get('.swiper-button-next');
        cy.get('.swiper-button-prev');
    });
});