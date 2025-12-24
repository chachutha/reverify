const{test,expect}=require('@playwright/test')

test('Automate',async ({page})=>{

await page.goto('https://www.facebook.com/')

// click on login

//await page.click("//button[normalize-space()='Login']")

//await page.click("button[data-ttid='login-btn']")

//  enter username

await page.fill("//input[@id='email']", 'sai.sravanth268@gmail.com')

await page.fill("//input[@id='pass']", 'Deekshit@12345')

await page.click("(//button[normalize-space()='Log in'])")

await page.click("//*[name()='path' and contains(@d,'M20.181 35')]")

})
