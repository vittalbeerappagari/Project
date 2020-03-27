$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/resources/FEATURES/login.feature");
formatter.feature({
  "name": "Login",
  "description": "\tAs a e_commerce vendor\n I want to access to the portal",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with SauceDemo Test",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_have_browser_with_SauceDemo_Test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \u0027standard_user\u0027 and I enter password as \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_enter_username_as_and_I_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ValidCredentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I should access to the portal with title as \u0027Swag Labs\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_should_access_to_the_portal_with_title_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with SauceDemo Test",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_have_browser_with_SauceDemo_Test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \u0027standard_user\u0027 and I enter password as \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_enter_username_as_and_I_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on Menu",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Menu button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_click_on_Menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I side menu with about button has to appear",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_side_menu_with_about_button_has_to_appear()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with SauceDemo Test",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_have_browser_with_SauceDemo_Test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \u0027standard_user\u0027 and I enter password as \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_enter_username_as_and_I_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on About",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Menu button",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_click_on_Menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on About",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_click_on_About()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BOE9VS2\u0027, ip: \u0027192.168.43.149\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_242\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\kalyan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53931}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fba9e948eca664237e8f4addd19a86c5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.cts.pages.ProductsPage.clickOnAbout(ProductsPage.java:35)\r\n\tat com.cts.stepdefinition.StepDefinitions.i_click_on_About(StepDefinitions.java:76)\r\n\tat ✽.I click on About(file:///C:/Users/kalyan/git/repository2/Saucedemo-final/src/main/resources/FEATURES/login.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "application is redirected to page with title as \u0027Cross Browser Testing, Selenium Testing, Mobile Testing | Sauce Labs\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.application_is_redirected_to_page_with_title_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with SauceDemo Test",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_have_browser_with_SauceDemo_Test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \u0027standard_user\u0027 and I enter password as \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_enter_username_as_and_I_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "click on company",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Menu button",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_click_on_Menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on About",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_click_on_About()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BOE9VS2\u0027, ip: \u0027192.168.43.149\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_242\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\kalyan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53959}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: bf25e760ad75d2f55597aab5efa32a69\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.cts.pages.ProductsPage.clickOnAbout(ProductsPage.java:35)\r\n\tat com.cts.stepdefinition.StepDefinitions.i_click_on_About(StepDefinitions.java:76)\r\n\tat ✽.I click on About(file:///C:/Users/kalyan/git/repository2/Saucedemo-final/src/main/resources/FEATURES/login.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on Company",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_click_on_Company()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "a list with About Us option must open",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.a_list_with_careers_option_must_open()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have browser with SauceDemo Test",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_have_browser_with_SauceDemo_Test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username as \u0027standard_user\u0027 and I enter password as \u0027secret_sauce\u0027",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_enter_username_as_and_I_enter_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "click on careers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on Menu button",
  "keyword": "When "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_click_on_Menu_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on About",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_click_on_About()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BOE9VS2\u0027, ip: \u0027192.168.43.149\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_242\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\kalyan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53996}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e7be2b395580fbe72a00a37da6e78ddd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.cts.pages.ProductsPage.clickOnAbout(ProductsPage.java:35)\r\n\tat com.cts.stepdefinition.StepDefinitions.i_click_on_About(StepDefinitions.java:76)\r\n\tat ✽.I click on About(file:///C:/Users/kalyan/git/repository2/Saucedemo-final/src/main/resources/FEATURES/login.feature:31)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on Company",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.i_click_on_Company()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on careers",
  "keyword": "And "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.click_on_careers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "career page with title \u0027Careers | Sauce Labs\u0027 has to open",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cts.stepdefinition.StepDefinitions.career_page_with_title_has_to_open(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});