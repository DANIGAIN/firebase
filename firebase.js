
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


//------------------------------  function ----------------------------------------//

async function InsertData(event)
{

    const userRef  = collection(db, 'user');
    event.preventDefault()
    let nam = event.target[name='name'].value;
    let adderss = event.target[name='address'].value;
    await setDoc(doc(userRef),
    {

        name : nam,
        adderss : adderss,
    })

    $('.modal').hide('2s');
    $('#show').show();
    $('#btn').show();

    
}

async function Remove()
{
    await deleteDoc(doc(db, "user", "JEF40NUkygqRXnxr40iR"));

}
async function  UpdateDate()
{
    var token = await response.user.getIdToken();
    console.log('TokenID', token);
      await updateDoc( doc(db, "user", "SF"), {
           "name": "dani",
          });


}
UpdateDate();


//--------------------------   read   -----------------------------------//
async function  user(db)
    {
        const userSanpshot  = await getDocs(collection(db,'user'));
    
        const dataList = userSanpshot.docs.map(doc => doc.data());
        return dataList;
    }
  
    user(db) 
    .then(function(data)
    {
        data.forEach(function(value ,ind)
        {
            
            const tr = $(`<tr><td>${value.name}</td> <td>${value.adderss}</td> <td> X </td> </tr>`)
            $('table').append(tr);
        })

        
    })

   
    



// ------------------------------EventListener  -----------------------------------//
$('#addUser').on('submit',InsertData);




