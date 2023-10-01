// google-maps.d.ts
declare namespace google {
    namespace maps {
        interface MapOptions {
            center?: google.maps.LatLng | google.maps.LatLngLiteral;
            zoom?: number;
            // Add any other MapOptions properties you're using
        }

        class Map {
            constructor(mapDiv: Element, opts?: MapOptions);
            // Add any other Map methods and properties you're using
        }

        interface LatLng {
            // Add LatLng properties and methods if needed
        }

        interface LatLngLiteral {
            lat: number;
            lng: number;
        }
    }
}
