
    const pinDetails = [
            {
              pin: 'kukatpally',
              name: 'ABC Medicals',
              brands: 'PARACETAMOL, ASPIRIN, IBUPROFEN',
              availability: '10AM to 5PM - Monday to Saturday',
              gmaps: 'https://www.google.co.in/maps/search/kukatpally+medical+shops/@17.4793067,78.3907074,14.36z?entry=ttu'
            },
            {
              pin: 'ameerpet',
              name: 'XYZ Pharma',
              brands: 'ANTIBIOTICS, VITAMINS, COUGH SYRUP',
              availability: '9AM to 6PM - Monday to Friday',
              gmaps: 'https://www.google.co.in/maps/search/ameerpet+medical+shops/@17.4375102,78.4482884,15z?entry=ttu'
            },
            {
              pin: 'secunderabad',
              name: 'MediCare Plus',
              brands: 'PAIN RELIEVERS, ALLERGY MEDICINE, DIGESTIVE AIDS',
              availability: '8:30AM to 7PM - Monday to Sunday',
              gmaps: 'https://www.google.co.in/maps/search/secunderabad+medical+shops/@17.4399293,78.4982744,14z?entry=ttu'
            },
            {
              pin: 'banjarahills',
              name: 'Health Haven',
              brands: 'DIABETIC MEDICATION, HEART HEALTH, SKIN CARE',
              availability: '9AM to 8PM - Monday to Saturday',
              gmaps: 'https://www.google.co.in/maps/search/banjarahills+medical+shops/@17.421306,78.4349613,15z?entry=ttu'
            },
            {
              pin: 'madhapur',
              name: 'Green Cross Pharmacy',
              brands: 'COLD AND FLU MEDICINES, EYE CARE, FIRST AID',
              availability: '10AM to 6PM - Monday to Sunday',
              gmaps: 'https://www.google.co.in/maps/search/madhapur+medical+shops/@17.4485747,78.3911093,14z?entry=ttu'
            },
            {
              pin: 'tolichowki',
              name: 'Vista Meds',
              brands: 'VITAMIN SUPPLEMENTS, RESPIRATORY MEDICATION, PEDIATRIC CARE',
              availability: '8AM to 6:30PM - Monday to Friday',
              gmaps: 'https://www.google.co.in/maps/search/tolichowki+medical+shops/@17.409503,78.4328352,14.67z?entry=ttu'
            },
            {
              pin: 'dilsukhnagar',
              name: 'Care Corner Pharmacy',
              brands: 'ALLERGY MEDICINES, DIETARY SUPPLEMENTS, JOINT PAIN RELIEF',
              availability: '9:30AM to 7:30PM - Monday to Saturday',
              gmaps: 'https://www.google.co.in/maps/search/dilsukhnagar+medical+shops/@17.368469,78.5360015,15z?entry=ttu'
            },
            {
              pin: 'uppal',
              name: 'Sunrise Health Mart',
              brands: 'WOUND CARE, GASTROINTESTINAL MEDICINES, HERBAL PRODUCTS',
              availability: '10AM to 6PM - Monday to Sunday',
              gmaps: 'https://www.google.co.in/maps/search/uppal+medical+shops/@17.398407,78.5596212,14z?entry=ttu'
            },
            {
              pin: 'malakpet',
              name: 'City Cure Pharmacy',
              brands: 'EYE DROPS, SKIN OINTMENTS, ORAL CARE',
              availability: '8:30AM to 8PM - Monday to Saturday',
              gmaps: 'https://www.google.co.in/maps/search/malakpet+medical+shops/@17.370609,78.501313,15z?entry=ttu'
            },
            {
              pin: 'kondapur',
              name: 'Wellness World',
              brands: 'NUTRITIONAL SUPPLEMENTS, FITNESS PRODUCTS, HOMEOPATHIC MEDICINES',
              availability: '9AM to 7:30PM - Monday to Sunday',
              gmaps: 'https://www.google.co.in/maps/search/kondapur+medical+shops/@17.4629611,78.3585093,14z?entry=ttu'
            },
            {
              pin: 'gachibowli',
              name: 'HealthHub Express',
              brands: 'PAIN MANAGEMENT, DIETARY SUPPLEMENTS, SKIN CARE',
              availability: '8AM to 7PM - Monday to Friday',
              gmaps: 'https://www.google.co.in/maps/search/gachibowli+medical+shops/@17.4316,78.386,14z?entry=ttu'
            },
            {
              pin: 'nampally',
              name: 'Central Care Pharmacy',
              brands: 'ALLERGY MEDICATION, FIRST AID SUPPLIES, VITAMINS',
              availability: '9:30AM to 8PM - Monday to Saturday',
              gmaps: 'https://www.google.co.in/maps/search/nampally+medical+shops/@17.388001,78.471631,15z?entry=ttu'
            },
            {
              pin: 'begumpet',
              name: 'Metro Meds',
              brands: 'COLD AND COUGH MEDICINES, WOMEN\'S HEALTH, DIABETIC SUPPLIES',
              availability: '10AM to 6:30PM - Monday to Sunday',
              gmaps: 'https://www.google.co.in/maps/search/begumpet+medical+shops/@17.4458,78.4485,14z?entry=ttu'
            },
            {
                pin: 'charminar',
                name: 'Mega Medico',
                brands: 'PAIN RELIEF, SKIN CARE, DIETARY SUPPLEMENTS',
                availability: '9:30AM to 7:30PM - Monday to Saturday',
                gmaps: 'https://www.google.co.in/maps/search/charminar+medical+shops/@17.361622,78.474145,15z?entry=ttu'
              },
              {
                pin: 'lakdikapul',
                name: 'City Pharmacy',
                brands: 'DIABETIC SUPPLIES, VITAMIN C, PEDIATRIC CARE',
                availability: '10AM to 6:30PM - Monday to Sunday',
                gmaps: 'https://www.google.co.in/maps/search/lakdikapul+medical+shops/@17.397692,78.4658202,15z?entry=ttu'
              },
              {
                pin: 'kothapet',
                name: 'Sun Pharma Solutions',
                brands: 'ANTACIDS, COLD MEDICATIONS, WOUND CARE',
                availability: '8:30AM to 7PM - Monday to Saturday',
                gmaps: 'https://www.google.co.in/maps/search/kothapet+medical+shops/@17.366642,78.547547,14z?entry=ttu'
              },
              {
                pin: 'begum bazaar',
                name: 'Herbal Health Corner',
                brands: 'HERBAL REMEDIES, JOINT SUPPORT, IMMUNE BOOSTERS',
                availability: '9AM to 6:30PM - Monday to Friday',
                gmaps: 'https://www.google.co.in/maps/search/begum+bazaar+medical+shops/@17.360622,78.474935,15z?entry=ttu'
              },
              {
                pin: 'attapur',
                name: 'Modern Meds',
                brands: 'WOMEN\'S HEALTH, ALLERGY MEDICATION, FITNESS SUPPLEMENTS',
                availability: '10AM to 8PM - Monday to Sunday',
                gmaps: 'https://www.google.co.in/maps/search/attapur+medical+shops/@17.361622,78.474145,15z?entry=ttu'
              },
              {
                pin: 'somajiguda',
                name: 'Central Care Pharmacy',
                brands: 'PAIN MANAGEMENT, DIETARY SUPPLEMENTS, SKIN CARE',
                availability: '8AM to 7PM - Monday to Friday',
                gmaps: 'https://www.google.co.in/maps/search/somajiguda+medical+shops/@17.4264714,78.4536468,14z?entry=ttu'
              },
              {
                pin: 'narayanguda',
                name: 'Nara Meds',
                brands: 'VITAMIN SUPPLEMENTS, COLD AND FLU MEDICINES, DIABETIC CARE',
                availability: '9:30AM to 7:30PM - Monday to Saturday',
                gmaps: 'https://www.google.co.in/maps/search/narayanguda+medical+shops/@17.3946,78.4997,14z?entry=ttu'
              },
              {
                pin: 'karkhana',
                name: 'Royal Remedies',
                brands: 'RESPIRATORY MEDICATION, EYE CARE, DIGESTIVE HEALTH',
                availability: '10AM to 6PM - Monday to Sunday',
                gmaps: 'https://www.google.co.in/maps/search/karkhana+medical+shops/@17.458356,78.504616,14z?entry=ttu'
              },
              {
                pin: 'chandanagar',
                name: 'Nature\'s Cure',
                brands: 'HOMEOPATHIC MEDICINES, IMMUNE SUPPORT, NUTRITIONAL SUPPLEMENTS',
                availability: '9AM to 7:30PM - Monday to Sunday',
                gmaps: 'https://www.google.co.in/maps/search/chandanagar+medical+shops/@17.4936,78.3194,14z?entry=ttu'
              },
              {
                pin: 'himayatnagar',
                name: 'Hima Health Center',
                brands: 'SKIN CARE, ALLERGY MEDICATION, PAIN RELIEVERS',
                availability: '8:30AM to 8PM - Monday to Saturday',
                gmaps: 'https://www.google.co.in/maps/search/himayatnagar+medical+shops/@17.3984,78.4858,14z?entry=ttu'
              }
            
          
    ];

    function findFacilities() {
        const locationInput = document.getElementById("location");
        const location = locationInput.value.trim();

        const resultContainer = document.getElementById("result-container");
        resultContainer.innerHTML = ""; // Clear previous result

        const result = findNearestFacility(location);
        if (result) {
            resultContainer.innerHTML = "<div class='result-section'>" +
                "<div class='result-title'>RECOGNIZED-MEDICAL</div>" +
                "<div class='result-message'><p>" + result.name + "</p></div>" +
                "<div class='result-details'>" +
                "<div class='facility-info'><strong>Most sold brands:</strong> " + result.brands + "</div>" +
                "<div class='facility-info'><strong>Availability:</strong> " + result.availability + "</div>" +
                "<div class='facility-info'><strong>Gmaps Location:</strong> <a href='" + result.gmaps + "' target='_blank' class='gmaps-link'>Open in Google Maps</a></div>" +
                "</div>" +
                "</div>";
        } else {
            resultContainer.innerHTML = "<p>No matching facility found for the entered location.</p>";
        }

        locationInput.value = ""; // Clear the input field
    }

    function findNearestFacility(location) {
        const nearestFacility = pinDetails.find(entry => entry.pin === location);
        return nearestFacility;
    }
