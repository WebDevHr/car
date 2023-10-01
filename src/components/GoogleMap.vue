<!-- GoogleMap.vue -->
<template>
    <div class="my-10 rounded-md overflow-hidden">
        <div ref="mapContainer" class="map-container">
            <div ref="map" class="map"></div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue';

declare global {
    interface Window {
        initializeMap: () => void;
    }
}

export default defineComponent({
    name: 'GoogleMap',
    setup() {
        const map = ref<google.maps.Map | null>(null);
        const mapContainer = ref<HTMLElement | null>(null);

        onMounted(() => {
            // Load Google Maps script with a callback
            const googleMapsScript = document.createElement('script');
            googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAFDykbT-OmZPnNI960INiWVqvTLgNZB6s&libraries=places&callback=initializeMap`;
            googleMapsScript.defer = true;
            googleMapsScript.async = true;
            document.head.appendChild(googleMapsScript);

        });

        window.initializeMap = () => {
            // Initialize Google Map
            if (mapContainer.value) {
                map.value = new google.maps.Map(mapContainer.value, {
                    center: { lat: 37.7749, lng: -122.4194 }, // Default center (San Francisco)
                    zoom: 13, // Default zoom level
                });
                // Add a marker to the map
                const marker = new google.maps.Marker({
                    position: { lat: 39.920988, lng: 32.854328 }, // Marker position (San Francisco)
                    map: map.value,
                    title: 'Bizim adres', // Marker title
                });

                // Use Geocoding to get a human-readable address
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ location: marker.getPosition() }, (results: any, status: any) => {
                    if (status === 'OK') {
                        const address = results[0]?.formatted_address || 'Unknown Address';
                        const title = 'Trust & Go'; // Your custom title
                        const content = `
                                        <div>
                                            <h3 class="font-bold text-lg mb-2 border-b-2">${title}</h3>
                                            <p class="text-gray-500 my-2">${address}</p>
                                            <a class="underline decoration-2 text-blue-600" href="https://www.google.com/maps/place/Genpower+Genena%C4%B1d/@39.9211175,32.8535461,19z/data=!3m1!4b1!4m6!3m5!1s0x14d34faaa569f9c1:0x267ba0c92d0fc256!8m2!3d39.9211165!4d32.8541898!16s%2Fg%2F11g1nplxc4?entry=ttu">Daha büyük haritayı görüntüle</a>
                                            <!-- Add more organized information here -->
                                        </div>
                                        `;
                        const infowindow = new google.maps.InfoWindow({
                            content: content, // Content of the info window
                        });
                        infowindow.open(map.value, marker);

                        // Open the info window when the marker is clicked
                        marker.addListener('click', () => {
                            infowindow.open(map.value, marker);
                        });
                    }
                });
            }
            // Add your map markers or other customization here
        };

        return { mapContainer, map };
    },

});
</script>
  
<style scoped>
.map-container {
    height: 400px;
    /* Adjust the height as needed */
    position: relative;
}

.map {
    height: 100%;
    width: 100%;
}
</style>
  