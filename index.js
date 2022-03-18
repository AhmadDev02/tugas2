const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");



function getPromise() {
    return fetch('https://jsonlaceholder.typicode.com/psts/1')
        .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => alert(error));
}

async function getPostAsync() {
    try {
        const response = await fetch('https://jsonlaceholder.typicode.com/psts');
        if (!response.ok) throw new Error('error');
        const data = await response.json();
        console.log('using async', data);
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

// const getData = () => {
//     axios.get('https://reqres.in/api/users')
//         .then(response => {
//             console.log(response.data);
//         })
// };
const postData = () => {
    axios.post('https://reqres.in/api/register',{
        email: "eve.holt@reqres.in",
        password: "pistol"
})
    .then(response => {
        console.log(response.data);
    }).catch(err => {
    console.log(err,"opps ada error")
})
 };

getBtn.addEventListener("click", getPromise);
postBtn.addEventListener("click", postData);

