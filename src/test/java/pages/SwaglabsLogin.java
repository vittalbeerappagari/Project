package pages;



import org.openqa.selenium.By;

import swaglabs.WrapperClass;


public class SwaglabsLogin {
	
	// opens the application in browser
	public void launchApplication() {
		WrapperClass.openBrowser();
	}
	
	// enters the login details
	public void enterLoginDetails(String userName, String password) {
		WrapperClass.driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys(userName);
		WrapperClass.driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
	}
	
	// clicks on submit button
	public void clickSubmitButton() {
		WrapperClass.driver.findElement(By.xpath("//input[@type='submit']")).click();
	}
	
	// closes the application and browser
	public void closeApplication() {
		WrapperClass.closeBrowser();
	}
	
}
