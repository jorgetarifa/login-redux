import { types } from "../types/types";
import { firebase, google } from "../firebase/firebaseConfig";


export const registroEmailPasswordNombre = (email,password, name) => {
  return(dispatch) => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then( async ({user}) => {
      console.log(user);
      await user.updateProfile({displayName: name})
      dispatch(login(user.uid, user.displayName))
    })
   .catch(e =>{
     console.log(e)
   }) 

  }
};


export const loginGoogle = () => {
  return(dispatch) => {
    firebase
    .auth()
    .signInWithPopup(google)
    .then(({user}) => {
      console.log(user);
      dispatch(login(user.uid, user.displayName))
    });
  }
};

export const login = (id, displayname) => {
  return {
    type: types.login,
    payload: {
      id,
      displayname,
    },
  };
};
