//A simple study code with option set for firefox browser and automatic file download with Selenium

const { Builder } = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");

const options = new firefox.Options();
options.setPreference("browser.download.dir", "C:\\myDownloads"); //place where file will be saved
options.setPreference("browser.download.folderList", 2); //option 2 to not ask wich folder to save
options.setPreference("browser.helperApps.neverAsk.saveToDisk", "application/x-csv");

const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();

driver.get("http://samplecsvs.s3.amazonaws.com/Sacramentorealestatetransactions.csv");
