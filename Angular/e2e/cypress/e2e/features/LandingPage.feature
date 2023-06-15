Feature: LandingPage Functionality

    This Feature tests login scenarios

    Background: 
        Given the user is on the landing page

    Scenario: As a toh user, I want to navigate to landingpage in order to see the dashboard
        Then the user shall see the employee dashboard

    Scenario:     As a toh user, I want to navigate to Heroes page
        Given the user is on the landing page
        Then clicks the heroes button
        Then the user shall see the heroes screen

    Scenario: As a TOH user, I want to navigate to dashboard in order to see top 4 Heroes displayed
        Given the user is on the landing page
        Then user wants to see the top 4 heroes displayed

    Scenario: As a TOH user, I want to select a hero from the dashboard in order to see the heroe details displayed
        Given the user is on the is on the heroes page
        Then the user selects the first hero
        Then the user will see the hero detail

    Scenario: As a TOH user, I want to remove a hero in order to see the hero list decrease
        Given the user is on the is on the heroes page
        Then the user removes one hero
        Then the count should be one less