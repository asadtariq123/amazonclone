import {db,auth} from "../Configration/firebase"


export const toBasketdata = (item) =>(dispatch,previousstate)=>{
    //console.log("data in action",item);
    dispatch({
        type : "TO_BASKET",
        payload : item
    })
}
export const removebasketitemaction = (id) => (dispatch,previousstate)=>{
            dispatch({
                type: "REMOVE",
                payload : id
            })
}
export const doSignIn = (userdata) => async(dispatch,previousstate)=>{
   try {
       console.log(userdata.email,userdata.password);
    const res = await auth.createUserWithEmailAndPassword(userdata.email,userdata.password)
    const user = res.user
    console.log(user.uid);
    await db.collection("user").add({
        ...userdata,
        id : user.uid

    })
    dispatch({
        type : "Registration"
    })
   } catch (error) {
       alert(error)
   } 
   

}
export const doLogin = (email,password) => async(dispatch,previousstate)=>{
        try {
            console.log(email,password);
        const res = await auth.signInWithEmailAndPassword(email,password)
        const user = res.user
        console.log(user);
        const getdata = await db.collection("user").get()
        let fuser = []
        console.log(getdata);
         getdata.forEach((doc)=>{
             if(doc.data().id===user.uid){
                 console.log(doc.data())
                 fuser.push({
                     ...doc.data()
                 })
             }
         })
         console.log(fuser);
         dispatch({
             type : "SIGN_IN",
             payload : fuser
         })
        } catch (error) {
           alert(error) 
        }

}
export const signoutho = () => async(dispatch,previousstate)=>{
        dispatch({
            type : "SIGNOUT"
        })
}