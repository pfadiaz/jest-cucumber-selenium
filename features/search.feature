Feature: Search for something

  Scenario Outline: Verify a user can run a search
    Given I create world Driver for "<engine>"
    When I reach the "<engine>" search page
    Then I run the search for "<search-term>" for "<engine>"

    Examples:
      | engine | search-term               |
      | Google | automated testing         |
      | Bing   | software quality engineer |
