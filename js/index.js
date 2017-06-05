/**
 * Created by larryg on 6/4/17.
 */
"use strict";
(function(){

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 9,
            center: {lat: 29.425997, lng: -98.486414},

        });

        // Define the LatLng coordinates for the polygon's path.
        var serviceAreaCoords = [
            {lat: 29.748903, lng: -98.058192},
            {lat: 29.875553, lng: -98.409493},
            {lat: 29.826665, lng: -98.762343},
            {lat: 29.621458, lng: -98.794134},
            {lat: 29.502884, lng: -98.900053},
            {lat: 29.374692, lng: -98.771606},
            {lat: 29.272072, lng: -98.684195},
            {lat: 29.203220, lng: -98.670693},
            {lat: 29.112339, lng: -98.489067},
            {lat: 29.080641, lng: -98.090943},
            {lat: 29.339876, lng: -98.103490},
            {lat: 29.528417, lng: -98.113496},
            {lat: 29.748903, lng: -98.058192}
        ];

        // Construct the polygon.
        var serviceArea = new google.maps.Polygon({
            paths: serviceAreaCoords,
            strokeColor: '#203375',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#203375',
            fillOpacity: 0.30
        });
        serviceArea.setMap(map);
    }

initMap();

})();

