Feature: Search for something

  Scenario Outline: Verify a user can run a search
    Given I create world Driver for "<engine>"
    When I have a browser with "<engine>"
    Then I run the search for "<search-term>" for "<engine>"
    And I close the world driver for "<engine>"

    Examples:
      | engine | search-term               |
      | Google | automated testing         |
      | Bing   | software quality engineer |
