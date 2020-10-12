import { expect } from 'chai';
import 'chai-as-promised';
import 'chai-string';
import 'chai-arrays';
import {binding, then} from "cucumber-tsflow/dist";
import {browser} from "protractor";

@binding()
export class NavigationSpec {


  @then(/^I say hello$/, null, 2 * 5000)
  async sayHello() {
    await console.log('elo!');
    expect(1).to.be.equal(1);
  }

  @then(/^Page is open directly on datepicker screen$/, null, 5 * 5000)
  async directlyShowAirport() {
    await browser.get(browser.baseUrl + '/pages/forms/datepicker');
  }

}
