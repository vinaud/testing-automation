Feature: Search Techverito on Google

    Scenario: Search Techverito
        Given I visit Google homepage
        When I search for Techverito
        Then I should see the results on screen