        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            var mapOptions = {
                // How zoomed in you want the map to start at (always required)
                zoom: 13,
                scrollwheel: false,

                // The latitude and longitude to center the map (always required)
                center: new google.maps.LatLng(40.4267, -3.69325), // Replace latitude and longitude for your palce.

                styles: [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "saturation": 36
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    }
                ]
            };

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.411900, -3.685926),
                map: map,
                icon: 'assest/img/icon/pitch.png',
                title: 'Pistas de El Retiro'
            });
            var marker2 = new google.maps.Marker({
                position: new google.maps.LatLng(40.403408, -3.668272),
                map: map,
                icon: 'assest/img/icon/pitch.png',
                title: 'Polideportivo Adelfas'
            });
            var marker3 = new google.maps.Marker({
                position: new google.maps.LatLng(40.415927, -3.717330),
                map: map,
                icon: 'assest/img/icon/pitch.png',
                title: 'Polideportivo Adelfas'
            });
            var marker4 = new google.maps.Marker({
                position: new google.maps.LatLng(40.435464, -3.723166),
                map: map,
                icon: 'assest/img/icon/pitch.png',
                title: 'Polideportivo Adelfas'
            });
            var marker5 = new google.maps.Marker({
                position: new google.maps.LatLng(40.440298, -3.702910),
                map: map,
                icon: 'assest/img/icon/pitch.png',
                title: 'Polideportivo Adelfas'
            });
            var marker6 = new google.maps.Marker({
                position: new google.maps.LatLng(40.440167, -3.660681),
                map: map,
                icon: 'assest/img/icon/pitch.png',
                title: 'Polideportivo Adelfas'
            });
            var marker7 = new google.maps.Marker({
                position: new google.maps.LatLng(40.453361, -3.714755),
                map: map,
                icon: 'assest/img/icon/pitch.png',
                title: 'Polideportivo Adelfas'
            });
            var marker8 = new google.maps.Marker({
                position: new google.maps.LatLng(40.454472, -3.673728),
                map: map,
                icon: 'assest/img/icon/pitch.png',
                title: 'Polideportivo Adelfas'
            });
            var marker9 = new google.maps.Marker({
                position: new google.maps.LatLng(40.480003, -3.695014),
                map: map,
                icon: 'assest/img/icon/pitch.png',
                title: 'Polideportivo Adelfas'
            });
        }
