import Ember from 'ember';

// Get integer of temperature - decimally numbers doesn't matter
export function temperature(params) {
    var temperature = params[0];
    return Math.floor(temperature) + "°";
}

export default Ember.Helper.helper(temperature);