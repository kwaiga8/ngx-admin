import 'chai-as-promised';
import 'chai-string';
import { binding, then } from 'cucumber-tsflow/dist';
import { expect } from 'chai';
import 'chai-arrays';
import {DateTimePickerPage} from "../page_objects/date_time_picker.po";


const dateTimePickerPage: DateTimePickerPage = new DateTimePickerPage();


@binding()
export class DateTimePickerSpec {

  @then(/^I click in date time picker named (.*)$/, null, 5 * 5000)
  @then(/^I choose date time picker named (.*)$/, null, 5 * 5000)
  async clickInDTP(name: string) {
    await dateTimePickerPage.getDateTimePickerInput(name).click();
  }


  @then(/^I should see calendar pop-up$/, null, 5 * 5000)
  async isDTPvisible() {
   expect( await dateTimePickerPage.calendarHeader.isDisplayed(), `\n Ups calendar did not po up`).to.be.true;
  }

  @then(/^I should see calendar with current date$/, null, 5 * 5000)
  async isDateInCalendarVisible() {
    const dateInDTP = await dateTimePickerPage.calendarHeaderDate.getText();
    expect( dateInDTP, `\n Date in DTP: ${dateInDTP}`).to.be.equal(this.getFormattedTodayDate());
  }


  getFormattedTodayDate(): string {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    ];
    const date: Date = new Date();
    return monthNames[date.getMonth()] + ' ' + date.getDate()+ ', ' + date.getFullYear();
  }

}
