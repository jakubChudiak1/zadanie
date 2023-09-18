const estateItem = document.querySelectorAll(".estate-item");
const searchForm = document.querySelector('.search-location');
function initMap(){
    const map = new google.maps.Map(document.querySelector("#map"),{
        center:{ lat: 37.553236541464884,  lng:-122.31676590989164 }, 
        zoom:16,
        streetViewControl: false,
        fullscreenControl: false,
        scrollwheel: false,
        styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'transit',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels',
              stylers: [{ visibility: 'simplified' }] 
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                  {
                    color: '#ffffff'
                  }
                ]
            },
            {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [
                  {
                    color: "#eaeef7",
                  },
                ],
              },
          ],
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER,

          },
    });

    const locationData = [];
    const markers = [];

    estateItem.forEach((estate)=>{
        const location = estate.getAttribute("data-location");
        locationData.push(location);
    })

    const geocoder = new google.maps.Geocoder();
    
    function geocodeAddress(address) {
        geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK" && results[0].geometry) {
            const location = results[0].geometry.location;
            const locationIcon = {
                url: "../../images/house.jpg",
                scaledSize: new google.maps.Size(42, 42),
            };
            const marker = new google.maps.Marker({
                position: location,
                map: map,
                title: address,
                icon: locationIcon,
            });
        }else {
            console.error("Geocode was not successful for the following reason: " + status);
            }
        });
    }
    
    locationData.forEach((address) => {
        geocodeAddress(address);
    });

    const searchForm = document.querySelector('.search-location');
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const locationText = document.getElementById('location-text').value;

        geocoder.geocode({ address: locationText }, (results, status) => {
            if (status === "OK" && results[0].geometry) {
                const location = results[0].geometry.location;

                const marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: locationText,
                });

                map.setCenter(location);
            } else {
                console.error("Geocode was not successful for the following reason: " + status);
            }
        });
    });
}