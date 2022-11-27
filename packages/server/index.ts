const puppeteer = require("puppeteer");

(async () => {
  const brower = await puppeteer.launch({
    headless: false,
    executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
    // executablePath: '../../chromium/Chromium.app/Contents/MacOS/Chromium'
  })
  const page = await brower.newPage();
  // login
  await  page.goto("https://gitlab.tangees.com/users/sign_in")
  await page.click("#user_login")
  await page.type('input', "huangyi@tungee.com", {delay: 100});
  await page.click("#user_password");
  await page.type("input", "Tungee168", {delay: 100});
  await page.click('.btn-confirm');
  setTimeout(async () => {
    await page.goto("https://gitlab.tangees.com/estate-backend/estate/-/wikis/apps.api.industryoverview")
  }, 1000);
})()