export const likeFunction = async (postId) => {
  let db = await firebase.firestore();
  let auth = await firebase.auth().currentUser;
  let docRef = await db
    .collection("Posts")
    .doc(postId)
    .collection("likes" + postId)
    .doc("likeFrom" + auth.uid);

  await docRef.get().then((doc) => {
    if (!doc.exists) {
      docRef
        .set({
          userId: auth.uid,
          postId: postId,
          like: 1,
        })
        .then(() => {
          console.log(
            "el usuario" + auth.uid + "ha dado like en el post" + postId
          );
          console.log("se ha creado el documento de like:" + docRef.id);
          console.log("este documento tiene una data:");
        })
        .catch((error) => {
          console.error("ha habido algún error dando like:" + error);
        });
    } else if (doc.data().like == 1) {
      return docRef
        .update({
          like: 0,
        })
        .then(function () {
          console.log("el like estaba en true y pasó a false");
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    } else if (doc.data().like == 0) {
      return docRef
        .update({
          like: 1,
        })
        .then(function () {
          console.log("el like estaba en false y pasó a true");
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  });
};

export const counterFunction = (postId, myCallback) => {

  let unsubscribe;
  let db = firebase.firestore();
  let auth =  firebase.auth().currentUser;
  let docRefPost = db
    .collection("Posts")
    .doc(postId)
    .collection("likes" + postId)
    .where("like", "==", 1);

  
 docRefPost.onSnapshot(myCallback);  
 

  
}

  