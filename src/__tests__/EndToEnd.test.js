import puppeteer from 'puppeteer';

// FEATURE 2

jest.setTimeout(30000);

describe('show/hide an event details', () => {

  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250,
      ignoreDefaultArgs: ['--disable-extensions'] //ignores defaul settings that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event-card');
  });

  afterAll(async () => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event-card .card-text');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event-card .details-btn');
    const eventDetails = await page.$('.event-card .card-text')
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event-card .details-btn');
    const eventDetails = await page.$('.event-card .card-text')
    expect(eventDetails).toBeNull();
  });
});