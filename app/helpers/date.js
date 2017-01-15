import Ember from 'ember';

// I have to re-calculate timestamp to format like "Monday 15" 
export function date(params) {
  var timestamp = params[0];
  if (typeof timestamp === "number") {
    // get date object from timestap
    var date = new Date(params * 1000);
    // define names of weekdays
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // return date in wanted format 
    return weekday[date.getDay()] + ' ' + date.getDate();
  } else {
    return "";
  }
}

export default Ember.Helper.helper(date);