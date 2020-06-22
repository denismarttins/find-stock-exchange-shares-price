const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


console.log('Robô em funcionamento. Seja bem-vindo!!');

async function robo(){
    const browser = await puppeteer.launch({headless:true}); //if headless is false, puppeteer will open a new window in chromium
    const page = await browser.newPage(); //in order to open a new tabe on the page
    const acao = readlineSync.question("Informe o codigo da acao: ");
    
    const url = `https://www.google.com/search?ei=QiXtXsukGsPC5OUPteeK0A4&q=${acao}&oq=${acao}&gs_lcp=CgZwc3ktYWIQAzIMCAAQgwEQQxBGEPoBMgUIABCDATIFCAAQgwEyAggAMgUIABCDATIFCAAQgwEyAggAMgIIADIFCAAQgwEyBQgAELEDOgQIABBHOgcIABCxAxBDOgQIABBDOgkIABBDEEYQ-gE6BwgAEIMBEENQ6IEHWN-1B2CguwdoAXABeACAAbcDiAHVD5IBCTAuNS4zLjAuMZgBAKABAaoBB2d3cy13aXqwAQA&sclient=psy-ab&ved=0ahUKEwjLzaPu4I7qAhVDIbkGHbWzAuoQ4dUDCAw&uact=5`;
    await page.goto(url);
    await page.screenshot({path: 'resultadodabusca.png'}); //code to print result - in this case, return a "png" file.
    
    const resultado = await page.evaluate(() => {
        return document.querySelector('.IsqQVc.NprOob.XcVN5d').innerText;
    });
       
    console.log(`O valor de ${acao} é ${resultado}`);
    await browser.close(true);
   }

   robo();







