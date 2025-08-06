# ✨ Google Image Scraper

heyyy! ✨ welcome to the google image scraper project! this is a super cute and powerful Node.js script that lets you download a whole bunch of images from Google Images automatically.

this whole thing started 'cause i wanted to find pictures of cat loafs, but now you can use it to download pics of literally anything you want!

<img width="1780" height="897" alt="image" src="https://github.com/user-attachments/assets/ee02c970-dc46-443e-8f61-e883af06c1fb" />
<img width="480" height="140" alt="image" src="https://github.com/user-attachments/assets/32a73ccf-abf2-4ad3-bab8-1315c08ad01d" />

## what it do tho? 🤔

*   **📸 Scrapes Google Images** for any search term you can dream of. (config in js)
*   **🔢 Downloads the exact number of pics** you tell it to (please dont do much because it might take years).
*   **📁 Saves everything neatly** into a new folder for you.
*   **👻 Runs headlessly** so you don't have to see the browser doing its thing. it's pure magic.

## the tech stack 💻

this project was built with a whole lot of love and some really cool tech:

*   **Node.js:** lets us run javascript outside of the browser.
*   **Puppeteer:** the secret sauce that controls a chrome browser to find all the pics.
*   **Axios:** a lil helper that actually downloads the image files for us.
*   **good vibes**

## get this bread 🍞

wanna run this on your own machine? say less. just follow these steps.

**1. Clone the repo**

first, you gotta get the code. open your terminal and run this:

```bash
https://github.com/random-projects-coz-bored-and-ye/NodeJs-ImageScraper.git
```

**2. get in the folder**

now, hop into the project folder you just downloaded:

```bash
cd NodeJs-ImageScraper
```

**3. install the things**

this project has some dependencies (puppeteer and axios). install them by running:

```bash
npm install
```

and that's it! you're all set up. we ate that.

## how to use it ✨

running the script is super easy, fam.

**1. customize your search**

open the `downloader.js` file in your code editor. at the top, you'll see these two lines. change them to whatever you want!

```javascript
// put the search term you want here!
const searchTerm = 'cute cat loaf';
const downloadCount = 20; // how many pics do you wanna try to get?
```

**2. run the script!**

go to your terminal (make sure you're still in the project folder!) and run this command:

```bash
node downloader.js
```

now just sit back and watch the magic happen in your terminal! when it's done, you'll have a new folder named after your search term, full of all the pics.

## a super important vibe check 🚨

okay , lets talk for a sec.

*   **be cool with google:** scraping google's search results is technically against their Terms of Service. this project is for educational purposes only! use it responsibly and don't go trying to download the whole internet, okay?
*   **copyright is a thing:** the images you download belong to other people. make sure you have the right to use them for whatever you're doing, especially if it's not for personal use. be a good internet citizen! ✨

happy scraping!
