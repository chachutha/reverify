const { test, expect } = require("@playwright/test");

test('Alert with ok', async ({page})=>{

    await page.goto('https://arthurstechnologies.com/')

    
    await page.locator('#slider-1-slide-1-layer-1').click()

    
    await page.waitForTimeout(5000)
})