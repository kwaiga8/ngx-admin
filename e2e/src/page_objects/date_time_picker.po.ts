import {by, element, ElementFinder} from "protractor";

export class DateTimePickerPage {

  public calendarHeader: ElementFinder;
  public calendarHeaderDate:ElementFinder;

  constructor(){
    this.calendarHeader = element(by.tagName('nb-calendar-header'));
    this.calendarHeaderDate = this.calendarHeader.element(by.className('header')).element(by.className('title'));
  }

   getDateTimePicker(dtpName: string): ElementFinder {
    return element(by.cssContainingText('nb-card-header', dtpName)).element(by.xpath('..'));
  }
 getDateTimePickerInput(dtpName: string): ElementFinder {
    return this.getDateTimePicker(dtpName).element(by.css('input'));
  }

}
