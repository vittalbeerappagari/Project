package pages;

import org.openqa.selenium.By;

import swaglabs.WrapperClass;

public class SwaglabsAddtoCart {
	
	// opens the application in browser
	public void launchApplication() {
		WrapperClass.openBrowser();
	}
	
	// enters the login details
	public void enterLoginDetails() {
		WrapperClass.driver.findElement(By.xpath("//input[@id='user-name']")).sendKeys("standard_user");
		WrapperClass.driver.findElement(By.xpath("//input[@id='password']")).sendKeys("secret_sauce");
	}
	
	// clicks on submit button
	public void clickSubmitButton() {
		WrapperClass.driver.findElement(By.xpath("//input[@type='submit']")).click();
	}
	
	// adds to the cart
	public void addToCart() {
		WrapperClass.driver.findElement(By.xpath("//div[@class='inventory_item']//button[1]")).click();
	}
	
	// closes the application and browser
	public void closeApplication() {
		WrapperClass.closeBrowser();
	}
}
