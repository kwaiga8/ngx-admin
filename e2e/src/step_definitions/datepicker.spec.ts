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
   expect( await dateTimePickerPage.calendarHeader.isPresent()).to.be.true;
  }


}
