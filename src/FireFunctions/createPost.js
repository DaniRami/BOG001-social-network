var db = firebase.firestore()
var auth = firebase.auth().currentUser;
var docRef;
moment.locale('es'); 

export const post = async (idea) => {
    try {
     docRef = await db.collection("Posts").add({
      uid: firebase.auth().currentUser.uid,
      idea: idea,
      name: firebase.auth().currentUser.displayName || "no definido",
      email: firebase.auth().currentUser.email,
      fecha:  moment().format('MMMM Do YYYY, h:mm:ss a'),
      
    });
    console.log("post creado: ", docRef.id);
    
} catch (error) {
    
    console.error("Error al crear el  post: ", error);
  }
};


 
export const paintpost = async () => { 
 try {
  let postList = await db.collection("Posts")
  let allposts = await postList.get();
  for(const doc of allposts.docs){
    console.log(doc.id, '=>', doc.data());
  }
  return allposts;
 } catch (error) {
   
 }
 
}
