import http from 'k6/http';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  const res = http.get('http://localhost:3000/flow');
}