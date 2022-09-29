import firebase from 'firebase'
import 'firebase/firebase-storage'
import 'firebase/app'
import 'firebase/firebase-app'

var config = {
    apiKey: "AIzaSyCE_SSQXqMW0i2X_caYSvLIIlFO1Yz2oqo",
    authDomain: "estocar-8dd7b.firebaseapp.com",
    databaseURL: "https://estocar-8dd7b.firebaseio.com",
    projectId: "estocar-8dd7b",
    storageBucket: "estocar-8dd7b.appspot.com",
    messagingSenderId: "685455654187",
    appId: "1:685455654187:web:c98d5c7ea5f9d2a031d96e"
  };
  
firebase.initializeApp(config);

const storage = firebase.storage()
var ref = storage.ref('images/')

const fb = {

    addImg: async function(fbImg){

        const res = await ref.child(fbImg.name).put(fbImg)
        return res
    },

    remImg: async function (img) {

        var refUrl = storage.refFromURL(img)

        refUrl.delete()
    }

}

export default fb