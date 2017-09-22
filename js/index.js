/**
 * Created by larryg on 6/4/17.
 */
"use strict";
(function(){
    // Set up the map
    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 9,
            center: {lat: 29.425997, lng: -98.486414},
            scrollwheel:  false
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
// Initialize the map
initMap();

    //Define Service Zip Codes
    var serviceAreaZips = [
        78201, 
        78202, 
        78203, 
        78204, 
        78205, 
        78206, 
        78207,
        78208, 
        78209, 
        78210, 
        78211, 
        78212, 
        78213, 
        78214, 
        78215, 
        78216, 
        78217, 
        78218, 
        78219, 
        78220, 
        78221, 
        78222, 
        78223, 
        78224, 
        78225, 
        78226, 
        78227, 
        78228, 
        78229, 
        78230, 
        78231, 
        78232, 
        78233, 
        78234, 
        78235, 
        78236, 
        78237, 
        78238, 
        78239, 
        78240, 
        78241, 
        78242, 
        78243, 
        78244, 
        78245, 
        78246, 
        78247, 
        78248, 
        78249, 
        78250, 
        78251, 
        78252, 
        78253, 
        78254, 
        78255, 
        78256, 
        78257, 
        78258, 
        78259, 
        78260, 
        78261, 
        78262, 
        78263, 
        78264,
        78265, 
        78266, 
        78268, 
        78269, 
        78270, 
        78275, 
        78278, 
        78279, 
        78280, 
        78283, 
        78284, 
        78285, 
        78286, 
        78287, 
        78288, 
        78289, 
        78291, 
        78292, 
        78293, 
        78294, 
        78295, 
        78296, 
        78297, 
        78298, 
        78299
    ]

    //Function to check if user zip exists in deficed service area
    function zipCheckUserInput() {
        var input = $('#zip').val();
        input = parseInt(input);
        if (serviceAreaZips.indexOf(input) > -1) {
            $('#zipHeader').hide();
            $('#zipFail').hide();
            $('#zipSuccess').slideDown();
        }else {
             $('#zipHeader').hide();
             $('#zipSuccess').hide();
            $('#zipFail').slideDown();
        }
    }

    //Checks zip code on click of check zipcode button
    $('#zipCheck').click(function() {
        zipCheckUserInput();
    });

    //Checks zip code on enter keypress in check zip form
    $('#zip').keypress(function(e){
        if (e.keycode == 13 || e.which == 13) {
            zipCheckUserInput();
        }
    });

})();

