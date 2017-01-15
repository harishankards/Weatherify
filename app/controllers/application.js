import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        // If user click "OK" button
        showMeWather: function (city) {

            // Start getting data from API
            this.getData(city);
        }
    },
    getData: function (city) {
        var _that = this;

        //ask openweathermap.org server for data
        Ember.$.getJSON("//api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&mode=json&units=metric&cnt=16&appid=08386da1df4f62f3426794b77cce7146",
            function (data) { //callback with data

                //if code of response is 200 - OK
                if (data.cod === "200") {

                    // Nicename of found city
                    var currentCity = data.city.name;

                    // Today forecast
                    var today = data.list[0];

                    // Forecast for next 15 days
                    var forecast = data.list.slice(1, 16);

                    // Set data to template
                    _that.setProperties({
                        currentCity: currentCity,
                        today: today,
                        forecast: forecast
                    });                }
            });
    }
});
