import http from 'k6/http';
import { check } from 'k6'

export const options = {
    vus: 60,
    duration: '30s',
  };

export default function(){
    const id = 1
    const url = `https://test-api.k6.io/public/crocodiles/${id}`

    const res = http.get(url);
    check( res,{'Status Code': (r)=> r.status ===200});
    const responseData = JSON.parse(res.body);
    const data = responseData;
    console.log(data);

    // Print the count of IDs
    // console.log(`Number of IDs: ${data.length}`);

    // Print all the names
    // data.forEach((item) => {
    //     console.log(`ID: ${item.id}, Name: ${item.name}`);
    // });
}