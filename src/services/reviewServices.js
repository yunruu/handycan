import { db } from "../config/firebaseConfig";
import { doc, setDoc, getDoc, deleteDoc, collection, query, where, getDocs, serverTimestamp} from "firebase/firestore";
import { disabilityTag } from "../utils/DisabilityTag";
import { filterBy } from "../utils/FilterBy";
import { updateLocationAddReview, updateLocationDeleteReview } from "./LocationServices";

/* CREATE */
//To update review, call deleteReview and addReview with same placeId and uid.
/**
 * Adds review to the database for a given location. 
 * Note that a review is unique based on its placeId, uid and tag.
 * Duplicate reviews based on the above criteria will be rejected.
 * To update a review, call deleteReview and addReview with same placeId and uid.
 * @param {String} placeId Textual identifier in accordance to Google Maps API location placeId
 * @param {String} uid User id on Firebase Authentication
 * @param {String} username Username of user to be displayed
 * @param {String} text1 What did you like about this place?
 * @param {String} text2 What did you feel could be improved on?
 * @param {String} text3 What are suggestions of improvement
 * @param {disabilityTag} tag Disability tag assigned to the review
 * @param {int} score Score for the location on its disability accessibility out of 5
 * @returns placeId if successful, null if not
 */
export async function addReview(placeId, uid, username, text1, text2, text3, tag, score) {
    if (!Object.values(disabilityTag).includes(tag)) {
        console.log("Tag is invalid");
        return null;
    }

    let tag_suffix = "";
    switch (tag) {
        case disabilityTag.AUDIO:
            tag_suffix = "0000";
            break;
        case disabilityTag.MOBILITY:
            tag_suffix = "1111";
            break;
        case disabilityTag.VISUAL:
            tag_suffix = "2222";
            break;
        case disabilityTag.MENTAL:
            tag_suffix = "3333";
            break;
        case disabilityTag.OTHER:
            tag_suffix = "4444";
            break;
    }

    //Check if review on same place by same person with same tag already exists
    try {
        const docSnap = await getDoc(doc(db, `/Reviews`, placeId + uid + tag_suffix));
        if (docSnap.exists()) {
            console.log('Review already exists');
            return null;
        }
    } catch (err) {
        console.log('Error checking if review exists', err);
        return null;
    }

    //Check if location exists
    let location;
    try {
        const docSnap = await getDoc(doc(db, "Locations", placeId));
        if (docSnap.exists()) {
            location = docSnap.data();
        } else {
            console.log('Location does not exist, unable to add review');
            return null;
        }
    } catch (err) {
        console.log('Error checking location for add review', err);
        return null;
    }

    //Primary key for review is (placeId, uid, tag_suffix);
    //addReview first before updating location tallies
    //Use promise chaining
    await setDoc(doc(db, '/Reviews', placeId + uid + tag_suffix), {
        placeId: placeId,
        uid: uid,
        tag: tag,
        username: username,
        text1: text1,
        text2: text2,
        text3: text3,
        score: score,
        timestamp: serverTimestamp(),
    })
    .then(updateLocationAddReview(placeId, location, score))
    .catch((err) => {
        console.log('Error adding review', err);
        return null;
    });

    return placeId;
}

/* READ */
/**
 * Retrieves a list of review objects for a given location from database after filtering. 
 * It is sorted in chronological order from most recent to least recent.
 * Review objects have the following fields accessible by dot notation:
 * placeId, uid, tag, text1, text2, text3, score, timestamp (based on server time GMT +8)
 * @param {String} placeId Textual identifier in accordance to Google Maps API location placeId
 * @param {filterBy} filterType Type of filter to apply
 * @returns Array of review objects for a given location from database after filtering. 
 */
export async function getReviewList(placeId, filterType) {
    //Get all reviews on location
    let q = query(collection(db, "Reviews"), where("placeId", "==", placeId));

    const querySnapshot = await getDocs(q);
    const initialList = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        initialList.push(doc.data());
    });

    let filteredList;
    //Filter result by tag, default is no filter
    switch (filterType) {
        case filterBy.AUDIO:
            filteredList = initialList.filter((review) => review.tag == disabilityTag.AUDIO);
            break;
        case filterBy.MOBILITY:
            filteredList = initialList.filter((review) => review.tag == disabilityTag.MOBILITY);
            break;
        case filterBy.VISUAL:
            filteredList = initialList.filter((review) => review.tag == disabilityTag.VISUAL);
            break;
        case filterBy.MENTAL:
            filteredList = initialList.filter((review) => review.tag == disabilityTag.MENTAL);
            break;
        case filterBy.OTHER:
            filteredList = initialList.filter((review) => review.tag == disabilityTag.OTHER);
            break;
        default:
            filteredList = initialList;
    }
    //Sort the reviews by timestamp in descending order
    const sortedList = filteredList.sort((reviewA, reviewB) => reviewA.timestamp - reviewB.timestamp);
    return sortedList;
}

/* DELETE */
/**
 * Deletes review from the database for a given location. 
 * Note that a review is unique based on its placeId, uid and tag.
 * Duplicate reviews based on the above criteria will be rejected.
 * To update a review, call deleteReview and addReview with same placeId and uid.
 * @param {String} placeId Textual identifier in accordance to Google Maps API location placeId
 * @param {String} uid User id on Firebase Authentication
 * @param {disabilityTa} tag Disability tag assigned to the review
 * @returns placeId if successful, null if not
 */
export async function deleteReview(placeId, uid, tag) {
    if (!Object.values(disabilityTag).includes(tag)) {
        console.log("Tag is invalid");
        return null;
    }

    let tag_suffix = "";
    switch (tag) {
        case disabilityTag.AUDIO:
            tag_suffix = "0000";
            break;
        case disabilityTag.MOBILITY:
            tag_suffix = "1111";
            break;
        case disabilityTag.VISUAL:
            tag_suffix = "2222";
            break;
        case disabilityTag.MENTAL:
            tag_suffix = "3333";
            break;
        case disabilityTag.OTHER:
            tag_suffix = "4444";
            break;
    }

    //Check if review to delete exists
    let review;
    try {
        const docSnap = await getDoc(doc(db, `/Reviews`, placeId + uid + tag_suffix));
        if (docSnap.exists()) {
            review = docSnap.data();
        } else {
            console.log('Review does not exist');
            return null;
        }
    } catch (err) {
        console.log('Error getting review to delete', err);
        return null;
    }

    const score = review.score;
    //Check if location exists
    let location;
    try {
        const docSnap = await getDoc(doc(db, "Locations", placeId));
        if (docSnap.exists()) {
            location = docSnap.data();
        } else {
            console.log('Location does not exist, unable to delete review, this is not supposed to happen');
            return null;
        }
    } catch (err) {
        console.log('Error checking location for delete review', err);
        return null;
    }

    //Primary key for review is (placeId, uid, tag_suffix);
    //deleteReview first before updating location tallies
    //Use promise chaining
    await deleteDoc(doc(db, "Reviews", placeId + uid + tag_suffix))
        .then(updateLocationDeleteReview(placeId, location, score))
        .catch((err) => {
            console.log('Error deleting review', err);
            return null;
        });
    
    return placeId;
};