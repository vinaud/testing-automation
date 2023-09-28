package Exercises;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class Tarefa1 {

	public static void main(String[] args) {
		WebDriver driver = new ChromeDriver();
		driver.get("https://rahulshettyacademy.com/AutomationPractice/");
		
		driver.findElement(By.xpath("//fieldset//label[@for='bmw']//input[@id='checkBoxOption1']")).click();
		Assert.assertTrue(driver.findElement(By.xpath("//fieldset//label[@for='bmw']//input[@id='checkBoxOption1']")).isSelected());
		
		driver.findElement(By.xpath("//fieldset//label[@for='bmw']//input[@id='checkBoxOption1']")).click();
		Assert.assertFalse(driver.findElement(By.xpath("//fieldset//label[@for='bmw']//input[@id='checkBoxOption1']")).isSelected());
		
		Assert.assertEquals(driver.findElements(By.cssSelector("input[type='checkbox']")).size(), 3);
		System.out.println(driver.findElements(By.cssSelector("input[type='checkbox']")).size());
		
	}

}
