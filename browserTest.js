import { browser } from 'k6/experimental/browser';
import {check} from 'k6';
import http from 'k6/http';

export const options = {
    scenarios: {
      browser: {
        executor: 'constant-vus',
        exec: 'browserTest',
        options: {
          browser: {
              type: 'chromium',
              headless: false,
          },
        },
        vus: 40,
        duration: '20s'
      },
      protocol :{
        executor: 'constant-vus',
        exec: 'protocoltest',
        vus: 20,
        duration: '30s'
      }
    },
  }

export  async function browserTest(){
    const page = browser.newPage();

    await page.goto("https://otel-demo.field-eng.grafana.net/");
    
    const productCard= await page.locator('(//div[@data-cy="product-card"])[1]');
    productCard.click();

    const quantityOption = page.locator('[data-cy="product-quantity"]');
    quantityOption.selectOption('3');

    const addtoCartBtn = page.locator('[data-cy="product-add-to-cart"]');
    addtoCartBtn.click();

    check(page,{
        'cart item name': page => page.locator('//p[text()="National Park Foundation Explorascope"]').isVisible() === true ,
        'cart item quantity':page=> page.locator('//p[text()="3"]').isVisible()=== true   
    })

    page.close();
    browser.close();
}
export function protocoltest(){
    const res = http.get("https://otel-demo.field-eng.grafana.net/");

    check(res, {
        'Status is 200': res=> res.status===200
    })
}