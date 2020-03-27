
Feature: Test swaglabs
	
	Background: Steps repeating in the file
	Given Open chrome and start application
	Then close the application
	
	@TC01_Swaglabs
  Scenario Outline: Test login with valid credentials
    When User enter valid "<username>" and valid "<password>"
    Then user should be able to login successfully
    

    Examples: 
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |

	@TC02_Swaglabs
  Scenario: Test whether the user is able to add the product to the cart
    When user should login with valid credentials
    Then user should be able to add the product to the cart
  
	@TC03_Swaglabs
  Scenario: Test whether the user is able to click the about and naviagate to required page
    When user should login with valid credentials
    Then user should click the about by clicking on the home button and navigate to next page
    Then select anyone field in the about page
