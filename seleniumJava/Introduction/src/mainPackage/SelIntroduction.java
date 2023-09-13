package mainPackage;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;

public class SelIntroduction {

	public static void main(String[] args) {
	//	System.setProperty("webdriver.chrome.driver", path to webdriver)
		WebDriver driver = new ChromeDriver();
		driver.get("https://rahulshettyacademy.com");
		System.out.println(driver.getTitle());
		System.out.println(driver.getCurrentUrl());
		
		
	}
}
