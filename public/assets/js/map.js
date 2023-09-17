const estateItem = document.querySelectorAll(".estate-item");

function initMap(){
    const map = new google.maps.Map(document.querySelector(".map"),{
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

    const locationData = []

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
                scaledSize: new google.maps.Size(32, 32),
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
}