import { check } from 'k6';
import http from 'k6/http'

export const options = {
  vus: 5,
  duration: '3s',
};

const query =`query MyQuery {
    episode(id: "1") {
      air_date
      created
      episode
      name
    }
  }`

  const headers = {
    'Content-Type':'application/json'
  };

  export default function(){

    const url = 'https://rickandmortyapi.com/graphql';
    const payload = JSON.stringify({query})
    const res = http.post(url,payload,headers)
    check( res,{'Status Code': (r)=> r.status ===200});
    console.log(res.body);
  }