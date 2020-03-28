package swaglabs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WrapperClass {
	// declaring the webdriver object
	public static WebDriver driver;
	
	// In this function we are setting up the paths to launch the application in chrome
	public static void openBrowser() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		
		// maximizes the window in browser
		driver.manage().window().maximize();
		// implicitly waits for the webelement for 50 seconds if not found throughs an exception after 50 seconds
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		
		// opens this web page 
		driver.get("https://www.saucedemo.com/");
	}
	
	// used to close the application and browser
	public static void closeBrowser() {
		driver.close();
	}
	
}
