
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore,getDocs ,collection ,setDoc ,doc ,deleteDoc ,updateDoc  } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyBQXtzbZeCQq5P7TTOL4F7hzK910Ihs1kg",
  authDomain: "crud-aa89a.firebaseapp.com",
  projectId: "crud-aa89a",
  storageBucket: "crud-aa89a.appspot.com",
  messagingSenderId: "126812748887",
  appId: "1:126812748887:web:c61d76584045478bfeb712",
  measurementId: "G-4DD8YDB91T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let userCal = [];


  //------------------------------  function  ----------------------------------------//


async function  user(db)
    {
        const userSanpshot  = await getDocs(collection(db,'user'));
        return userSanpshot.docs;
    }
  
    user(db) 
    .then(function(data)
    {
        data.forEach(function(document)
        {
            let  user =  {
                docID :  document.id ,
                ...document.data()
            }; 
            userCal.unshift(user);
        })

        
    });


async function InsertData(event)
{
    event.preventDefault()
    let nam = event.target[name='name'].value;
    let adderss = event.target[name='address'].value;
    await setDoc(doc(collection(db , 'user')),
    {
        name : nam,
        adderss : adderss,
    })

    $('.modal').hide('2s');
    $('#show').show();
    $('#btn').show();

    
}


async function show()
{
  
    
    var people = [
        {
          docID: 'UykxJdxddoregEoaVTE2',
          name: 'Dani Gain',
          address: 'khulna'
        },
        {
          docID: 'HIrByhR8qB45i72aBj3y',
          name: 'Dani Gain',
          address: 'khulna'
        }
      ];


    
    console.log(userCal);
    console.log(people);
    
    
  
}

await show();


async function showUser()
{

}

async function Remove()
{
    await deleteDoc(doc(db, "user", "JEF40NUkygqRXnxr40iR"));

}
async function  UpdateDate()
{
      await updateDoc( doc(db, "user", "SF"), {
           "name": "dani",
          });


}


// ------------------------------EventListener  -----------------------------------//
$('#addUser').on('submit',InsertData);




