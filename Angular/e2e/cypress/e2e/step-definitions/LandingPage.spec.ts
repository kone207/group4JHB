import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { TOF } from "../page-objects/TOF";

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^the user shall see the employee dashboard$/, () => {
	TOF.VerifyDash();
});

Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^clicks the heroes button$/, () => {
	TOF.HeroesButtonClick();
});

Then(/^the user shall see the heroes screen$/, () => {
	TOF.VerifyHeroes();
});


Given(/^the user is on the landing page$/, () => {
	cy.visit("http://localhost:4200/dashboard");
});

Then(/^user wants to see the top 4 heroes displayed$/, () => {
	TOF.TopHeroCount();
});



Given(/^the user is on the is on the heroes page$/, () => {
	cy.visit("http://localhost:4200/heroes");
});

Then(/^the user selects the first hero$/, () => {
	TOF.SelectHero();
});

Then(/^the user will see the hero detail$/, () => {
	TOF.VerifyHeroDetail();
});


Given(/^the user is on the is on the heroes page$/, () => {
	cy.visit("http://localhost:4200/heroes");
});

Then(/^the user removes one hero$/, () => {
	return true;
});

Then(/^the count should be one less$/, () => {
	return true;
});

