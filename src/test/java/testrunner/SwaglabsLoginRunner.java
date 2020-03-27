package testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/feature/swaglabs.feature",
		plugin = {"pretty", "html:reports\\cucumber_html_report","json:reports\\cucumber_html_report\\jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports\\Extentreports\\Extentreport.html"},
		glue = {"stepdefinition"},
		monochrome = true
		)

public class SwaglabsLoginRunner {
	@AfterClass
	public static void extendReport() {
    Reporter.loadXMLConfig("C:\\javacoding\\Cucumber_SauceDemo\\extent_cofig.xm");
	
	
	
	}
}
