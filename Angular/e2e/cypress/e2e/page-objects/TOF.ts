export class TOF
{
    static DashboardButton = (): string => {return `//a[@href="/dashboard"]`}
    static HeroButton = (): string => {return `//a[@href="/heroes"]`}
    static AppDash = (): string => {return `//app-dashboard`}
    static heroDiv = (): string => {return `//div[@class="heroes-menu"]`}

    static Dashboard(){
        cy.xpath(this.DashboardButton()).click();
    }

    static VerifyDash() {
        cy.url().should('eq', 'http://localhost:4200/dashboard');
    }

    static HeroesButtonClick(){
        cy.xpath(this.HeroButton()).click();
    }

    static VerifyHeroes(){
        cy.url().should('eq', 'http://localhost:4200/heroes');
    }

    static TopHeroCount()    {
        cy.get('.heroes-menu > a').should('have.length', 4);
        
    }

    static SelectHero() {
        cy.get('.heroes > li').first().click();
    }

    static VerifyHeroDetail() {
        cy.get('app-hero-detail').should('be.visible');
    }
    
    static DeleteHero() {
        cy.get('.heroes > .delete').first().click();
    }

    static VerifyDelete() {
        
    }
}

//export default TOF