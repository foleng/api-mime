import { extend } from 'umi-request';


const errorHandler = function(error) {
  const codeMap = {
    '021': 'An error has occurred',
    '022': 'It’s a big mistake,',
    // ....
  };
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.status);
    console.log(error.response.headers);
    console.log(error.data);
    console.log(error.request);
    console.log(codeMap[error.data.status]);
  } else {
    // The request was made but no response was received or error occurs when setting up the request.
    console.log(error.message);
  }

  throw error; // If throw. The error will continue to be thrown.

  // return {some: 'data'}; If return, return the value as a return. If you don't write it is equivalent to return undefined, you can judge whether the response has a value when processing the result.
  // return {some: 'data'};
};

const request = extend({
  prefix: '/api/v1',
  timeout: 1000,
  responseType:'json',
  errorHandler
});


request.use(async (ctx, next) => {
  console.log('a1');
  await next();
  console.log('a2');
});
request.use(async (ctx, next) => {
  console.log('b1');
  await next();
  console.log('b2');
});

export default request