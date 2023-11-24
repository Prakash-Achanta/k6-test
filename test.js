import http from 'k6/http';
import { check } from 'k6'


export default function(){
    const url = "https://test-api.k6.io/public/crocodiles/"

    const res = http.get(url);
    check( res,{'Status Code': (r)=> r.status ===200});
    const responseData = JSON.parse(res.body);
    const data = responseData;

    // Print the count of IDs
    console.log(`Number of IDs: ${data.length}`);

    // Print all the names
    data.forEach((item) => {
        console.log(`ID: ${item.id}, Name: ${item.name}`);
    });
}