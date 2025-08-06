const puppeteer = require('puppeteer');
const axios = require('axios');
const fs = require('fs');

// put the search term you want here!
const searchTerm = 'cute cat loaf';
const downloadCount = 500; // how many pics do you wanna try to get?

// this is where we're gonna save the images
const downloadPath = 'photos';
if (!fs.existsSync(downloadPath)) {
  fs.mkdirSync(downloadPath);
}

async function scrapeImages() {
  console.log('omg starting up the browser... 💻');
  const browser = await puppeteer.launch({ headless: true }); // headless: true means it runs in the background
  const page = await browser.newPage();

  console.log(`searching for "${searchTerm}" on google images...`);
  await page.goto(`https://images.google.com/search?q=${searchTerm}&tbm=isch`);

  console.log('scrolling down to load more pics... 👇');
  
  let imageUrls = [];
  while (imageUrls.length < downloadCount) {
    const urlsOnPage = await page.evaluate(() => {
        const imageElements = Array.from(document.querySelectorAll('.mNsIhb img'));
        return imageElements.map(img => img.src).filter(src => src.startsWith('http'));
    });

    // add new, unique urls to our list
    urlsOnPage.forEach(url => {
        if (!imageUrls.includes(url)) {
            imageUrls.push(url);
        }
    });

    // scroll to the bottom of the page
    await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
    // wait a bit for new images to load in
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // safety break in case we can't find more images
    if (imageUrls.length >= (await page.evaluate(() => document.querySelectorAll('.mNsIhb img').length))) {
        break;
    }
  }

  imageUrls = imageUrls.slice(0, downloadCount);
  console.log(`✨ found ${imageUrls.length} image URLs! now downloading...`);

  // --- now we download each image! ---
  for (let i = 0; i < imageUrls.length; i++) {
    const url = imageUrls[i];
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      fs.writeFileSync(`${downloadPath}/image_${i + 1}.jpg`, response.data);
      console.log(`downloaded image ${i + 1} of ${imageUrls.length}`);
    } catch (error) {
      console.log(`could not download image ${i + 1}. big sad. 😔`);
    }
  }

  await browser.close();
  console.log(' all done! check the "photo" folder!');
}

scrapeImages();
