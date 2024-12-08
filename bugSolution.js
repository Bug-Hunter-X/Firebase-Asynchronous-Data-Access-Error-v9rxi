The solution involves using promise chaining or async/await to handle the asynchronous nature of Firebase's data retrieval.  Here's how you can fix it using `.then()`:

```javascript
import { getDoc, doc } from "firebase/firestore";

// ... your Firebase configuration ...

const docRef = doc(db, "collectionName", "documentId");
getDoc(docRef).then((docSnap) => {
  if (docSnap.exists()) {
    const data = docSnap.data();
    const myField = data.myField; // Access fields after checking for existence
    console.log(myField);
  } else {
    console.log("No such document!");
  }
}).catch((error) => {
  console.error("Error getting document: ", error);
});
```

Alternatively, using async/await:

```javascript
import { getDoc, doc } from "firebase/firestore";

// ... your Firebase configuration ...

async function getData() {
  const docRef = doc(db, "collectionName", "documentId");
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const myField = data.myField; // Access fields after checking for existence
      console.log(myField);
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document: ", error);
  }
}

getData();
```
This ensures that `myField` will only be accessed after the `getDoc` promise resolves successfully and the data is available.