// Imports
import {collection, addDoc, getFirestore, Firestore} from "firebase/firestore";

/* Collect Users google account Details 
and send it to the cloud Firestore Database */
export const addNewFirebaseUserDocument = async (
	user: any,
	stripeSessionId: any
) => {
	const db: Firestore = getFirestore();
	const collectionRef = collection(db, "users");

	try {
		const docRef = await addDoc(collectionRef, {
			uid: `${user?.uid}`,
			email: `${user?.email}`,
			photoURL: `${user?.photoURL}`,
			providerId: `${user?.providerId}`,
			displayName: `${user?.displayName}`,
			phoneNumber: `${user?.phoneNumber}`,
			stripeSessionId: `${stripeSessionId}`,
			emailVerified: `${user?.emailVerified}`,
			creationTime: `${user.metadata?.creationTime}`,
			lastSignInTime: `${user.metadata?.lastSignInTime}`,
		});
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};
