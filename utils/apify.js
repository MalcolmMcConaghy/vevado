const Apify = require('apify');

Apify.main(async () => {
  const requestQueue = await Apify.openRequestQueue();
  await requestQueue.addRequest({ url: 'https://www.getyourguide.co.uk/rome-l33/colosseum-ticket-t127592/?utm_force=0' });

  const handlePageFunction = async ({ request, $ }) => {
    const price = $('.price-actual').text();

    console.log(`The price of "${request.url}" is: ${price}.`);
  };

  const crawler = new Apify.CheerioCrawler({
    requestQueue,
    handlePageFunction,
  });

  await crawler.run();
});
