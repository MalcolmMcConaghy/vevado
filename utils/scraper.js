const puppeteer = require('puppeteer');

function scrape(url, selector) {
  puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.goto(url);

    let price = await page.evaluate((selector) => {
      return document.querySelector(selector).innerText;
    }, selector);

    console.log(`${url} ${price}`);

    await browser.close();
  });
}

scrape('https://www.musement.com/us/rome/colosseum-package-with-priority-entrance-tickets-roman-forum-and-palatine-hill-52933/', '[data-test="price-finalPrice"]');
scrape('https://www.getyourguide.co.uk/rome-l33/colosseum-ticket-t127592/?utm_force=0', '.price-actual');
scrape('https://www.headout.com/tour/9178/italy/rome/escorted-priority-entry-to-colosseum-roman-forum-palatine-hill-package', '.final-price-text');
scrape('https://www.tiqets.com/en/rome-c71631/colosseum-roman-forum-palatine-hill-priority-entrance-p975446', '.Price');


