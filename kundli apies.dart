kundli apies

{
    "actionInfo": {
        "actionId": "String"
    },
    "formData": {
        "userId": 0,
        "subUserId": 0,
        "birthPlaceId": 1,
        "name": "rishabh",
        "gender": "MALE",
        "birthDateAndTime": "1999-02-11 15:02:00",
        "birthPlaceName": "Trans Delhi Signature City, Ghaziabad, Uttar Pradesh",
        "birthPlaceLatitude": 28.78512191772461,
        "birthPlaceLongitude": 77.26062774658203,
        "birthDateAndTimeGmt": "1999-02-11 15:02:00 Asia/Kolkata",
        "timezoneId": 1,
        "timeZone": 5.5
    },
    "sessionData": {
        "userDetails": {
            "isAdmin": 0,
            "isAllAccess": 0,
            "langCode": "String",
            "userEmailId": "String",
            "userId": 0,
            "userName": "String"
        }
    }
}


post  https://api.kundaliexpert.com/kmAstroapp/api/v2/kundaliCharts/getKundaliDetails


{
    "actionInfo": {
        "actionId": "String"
    },
    "formData": {
        "userId": 0,
        "subUserId": 0,
        "birthPlaceId": 1,
        "name": "rishabh",
        "gender": "MALE",
        "birthDateAndTime": "1999-02-11 15:02:00",
        "birthPlaceName": "Trans Delhi Signature City, Ghaziabad, Uttar Pradesh",
        "birthPlaceLatitude": "28.79",
        "birthPlaceLongitude": "77.26",
        "timezoneId": 5.5
    },
    "sessionData": {
        "userDetails": {
            "isAdmin": 0,
            "isAllAccess": 0,
            "langCode": "String",
            "userEmailId": "String",
            "userId": 1,
            "userName": "String"
        }
    }
}

post https://api.kundaliexpert.com/kmAstroapp/api/v2/bala/getBalaResponse


{
    "formData": {
        "userId": 0,
        "subUserId": 0,
        "birthPlaceId": 1,
        "name": "rishabh",
        "gender": "MALE",
        "birthDateAndTime": "1999-02-11 15:02:00",
        "birthPlaceName": "Trans Delhi Signature City, Ghaziabad, Uttar Pradesh",
        "birthPlaceLatitude": 28.78512191772461,
        "birthPlaceLongitude": 77.26062774658203,
        "timezoneId": 1
    }
}


https://api.kundaliexpert.com/kmAstroapp/api/v2/chart/getVargKundali



GET MATCHING

https://api.kundaliexpert.com/kmAstroapp/api/v2/matchMaking/getMatchMaking

{
    "formData": {
        "groomName": "rishbah",
        "groomBirthDateAndTime": "1998-02-11 03:23:00",
        "groomBirthPlaceName": "Agra Fort, Rakabganj, Agra, Uttar Pradesh",
        "groomBirthPlaceLatitude": 27.179533004760742,
        "groomBirthPlaceLongitude": 78.02111053466797,
        "brideName": "kaljal",
        "brideBirthDateAndTime": "1999-02-11 15:23:00",
        "brideBirthPlaceName": "Brar Square, Delhi Cantonment, New Delhi, Delhi",
        "brideBirthPlaceLatitude": 28.608667373657227,
        "brideBirthPlaceLongitude": 77.14041137695312
    }
}