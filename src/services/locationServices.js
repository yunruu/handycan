import { db } from "../config/firebaseConfig";
import { doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs, limit } from "firebase/firestore";
import { disabilityTag } from "../utils/DisabilityTag";
import { filterBy } from "../utils/FilterBy";
import { sortBy } from "../utils/SortBy";
import { calcDist } from "../utils/CalcDist";

/* CREATE */
/**
 * Add a location to database containing essential details
 * @param {String} placeId Textual identifier in accordance to Google Maps API location placeId
 * @param {String} name
 * @param {int} long Longitude
 * @param {int} lat Latitude
 * @returns placeId if successful, null if not
 */
export async function addLocation(placeId, name, long, lat) {
    try {
        //Check if location already exists
        const location = await getLocation(placeId);
        if (location != null) {
            console.log('Location already exists');
            return null;
        }    
        await setDoc(doc(db, "Locations", placeId), {
            placeId: placeId,
            name: name,
            long: parseFloat(long),
            lat: parseFloat(lat),
            reviewNumber: 0,
            locationScore: null,
            audioScore: null,
            mobilityScore: null,
            visualScore: null,
            mentalScore: null,
            otherScore: null,
        });
        return placeId;
    } catch (err) {
        console.log('Error adding location', err);
        return null;
    }
}

/* READ */
/**
 * Retrieves a location object from database
 * @param {String} placeId Textual identifier in accordance to Google Maps API location placeId
 * @returns Location object if successful, null if not
 */
export async function getLocation(placeId) {
    try {
        const docSnap = await getDoc(doc(db, "Locations", placeId));
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log('Location does not exist');
            return null;
        }
    } catch (err) {
        console.log('Error getting location', err);
        return null;
    }
}

/**
 * Retrieves a list of location objects with name prefix matching the given string after filtering and sorting.
 * The function will atmost return 20 location objects from database.
 * Location objects have the following fields accessible by dot notation:
 * placeId, name, long, lat, reviewNumber, locationScore, audioScore, mobilityScore, visualScore, mentalScore, otherScore
 * The various scores are averages based on the reviews for a location, they can be null if no reviews with the tags exist.
 * @param {String} string String prefix matching location names
 * @param {filterBy} filterType Type of filter to apply
 * @param {sortBy} sortType Type of sorting to apply
 * @param {int} currLat Latitude of current location
 * @param {int} currLon Longitude of current location
 * @returns Array of location objects with name prefix matching the given string after filtering and sorting
 */
export async function getLocationList(string, filterType, sortType, currLat, currLon) {
    //Query based on prefix match with string and limit to at most 20
    let q = query(collection(db, "Locations"), 
        where('name', '>=', string),
        where('name', '<=', string+ '\uf8ff'),
        limit(20),
    );
    const querySnapshot = await getDocs(q);
    const initialList = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        initialList.push(doc.data());
    });

    //Filter list based on filter type
    let filteredList;
    switch (filterType) {
        case filterBy.AUDIO:
            filteredList = initialList
                .filter((location) => location.audioScore != null )
                .map((location) => {
                    location.scoreType = location.audioScore;
                    return location;
                });
            break;
        case filterBy.MOBILITY:
            filteredList = initialList
                .filter((location) => location.mobilityScore != null )
                .map((location) => {
                    location.scoreType = location.mobilityScore;
                    return location;
                });
            break;
        case filterBy.VISUAL:
            filteredList = initialList
                .filter((location) => location.visualScore != null )
                .map((location) => {
                    location.scoreType = location.visualScore;
                    return location;
                });
            break;
        case filterBy.MENTAL:
            filteredList = initialList
                .filter((location) => location.mentalScore != null )
                .map((location) => {
                    location.scoreType = location.mentalScore;
                    return location;
                });
            break;
        case filterBy.OTHER:
            filteredList = initialList
                .filter((location) => location.otherScore != null )
                .map((location) => {
                    location.scoreType = location.otherScore;
                    return location;
                });
            break;
        default:
            filteredList = initialList
                .map((location) => {
                    location.scoreType = location.locationScore;
                    return location;
                });
    }

    //Sort list based on sort type
    let sortedList = null;
    switch (sortType) {
        case sortBy.SCORE:
            sortedList = filteredList.sort((locA, locB) => locA.scoreType - locB.scoreType);
            break;
        case sortBy.REVIEW_NUMBER:
            sortedList = filteredList.sort((locA, locB) => locA.reviewNumber - locB.reviewNumber);
            break;
        case sortBy.DISTANCE:
            sortedList = filteredList.sort((locA, locB) => 
                calcDist(parseFloat(currLat), parseFloat(currLon), locB.lat, locB.long) 
                - calcDist(parseFloat(currLat), parseFloat(currLon), locA.lat, locA.long)
            );       
            break;
        default:
            sortedList = filteredList.sort((locA, locB) => locA.scoreType - locB.scoreType);
    }
    return sortedList;
}

/* UPDATE */

//Should only called by addReview
export async function updateLocationAddReview(placeId, location, score) {

    //Recalculate average score of each category
    let locationScore = 0;
    let reviewNumber = 0;
    let audioScore = 0;
    let audioNum = 0;
    let mobilityScore = 0;
    let mobilityNum = 0;
    let visualScore = 0;
    let visualNum = 0;
    let mentalScore = 0;
    let mentalNum = 0;
    let otherScore = 0;
    let otherNum = 0;

    const q = query(collection(db, "Reviews"), where("placeId", "==", placeId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        const docTag = doc.data().tag;
        const docScore = doc.data().score;
        reviewNumber++;
        locationScore += docScore;
        switch (docTag) {
            case disabilityTag.AUDIO:
                audioScore += docScore;
                audioNum++;
                break;
            case disabilityTag.MOBILITY:
                mobilityScore += docScore;
                mobilityNum++;
                break;
            case disabilityTag.VISUAL:
                visualScore += docScore;
                visualNum++;
                break;
            case disabilityTag.MENTAL:
                mentalScore += docScore;
                mentalScore++;
                break;
            case disabilityTag.OTHER:
                otherScore += docScore;
                otherNum++;
                break;
            default:
                otherScore += docScore;
                otherNum++;
        }
    });
    //Calculate average score, if no review of the category exists, score will defailt to null
    locationScore = reviewNumber === 0
        ? null
        : locationScore / reviewNumber;
    audioScore = audioNum ===  0 
        ? null 
        : audioScore / audioNum;
    mobilityScore = mobilityNum ===  0 
        ? null 
        : mobilityScore / mobilityNum;
    visualScore = visualNum === 0 
        ? null 
        : visualScore / visualNum;
    mentalScore = mentalNum === 0 
        ? null 
        : mentalScore / mentalNum;
    otherScore = otherNum === 0 
        ? null 
        : otherScore / otherNum;

    //Update location with new values
    try {
        await updateDoc(doc(db, "Locations", placeId), {
            reviewNumber: reviewNumber,
            locationScore: locationScore,
            audioScore: audioScore,
            mobilityScore: mobilityScore,
            visualScore: visualScore,
            mentalScore: mentalScore,
            otherScore: otherScore,
        });
    } catch (err) {
        console.log('Error updating locations for review addition', err);
        return null;
    }

}

//Should only called by deleteReview
export async function updateLocationDeleteReview(placeId, location, score) {
    //Recalculate average score of each category
    let locationScore = 0;
    let reviewNumber = 0;
    let audioScore = 0;
    let audioNum = 0;
    let mobilityScore = 0;
    let mobilityNum = 0;
    let visualScore = 0;
    let visualNum = 0;
    let mentalScore = 0;
    let mentalNum = 0;
    let otherScore = 0;
    let otherNum = 0;

    const q = query(collection(db, "Reviews"), where("placeId", "==", placeId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        const docTag = doc.data().tag;
        const docScore = doc.data().score;
        reviewNumber++;
        locationScore += docScore;
        switch (docTag) {
            case disabilityTag.AUDIO:
                audioScore += docScore;
                audioNum++;
                break;
            case disabilityTag.MOBILITY:
                mobilityScore += docScore;
                mobilityNum++;
                break;
            case disabilityTag.VISUAL:
                visualScore += docScore;
                visualNum++;
                break;
            case disabilityTag.MENTAL:
                mentalScore += docScore;
                mentalScore++;
                break;
            case disabilityTag.OTHER:
                otherScore += docScore;
                otherNum++;
                break;
            default:
                otherScore += docScore;
                otherNum++;
        }
    });
    //Calculate average score, if no review of the category exists, score will defailt to null
    locationScore = reviewNumber === 0
        ? null
        : locationScore / reviewNumber;
    audioScore = audioNum ===  0 
        ? null 
        : audioScore / audioNum;
    mobilityScore = mobilityNum ===  0 
        ? null 
        : mobilityScore / mobilityNum;
    visualScore = visualNum === 0 
        ? null 
        : visualScore / visualNum;
    mentalScore = mentalNum === 0 
        ? null 
        : mentalScore / mentalNum;
    otherScore = otherNum === 0 
        ? null 
        : otherScore / otherNum;

    try {
        await updateDoc(doc(db, "Locations", placeId), {
            reviewNumber: reviewNumber,
            locationScore: locationScore,
            audioScore: audioScore,
            mobilityScore: mobilityScore,
            visualScore: visualScore,
            mentalScore: mentalScore,
            otherScore: otherScore,
        })
    } catch (err) {
        console.log('Error updating locations for delete review', err);
        return null;   
    }

}

export { filterBy, sortBy, disabilityTag };