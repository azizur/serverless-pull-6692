'use strict';

module.exports.handler = async event => {
  const responseMsg = 'Go Serverless v1.0! Bar function executed successfully!';
  console.log(responseMsg);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: responseMsg,
        input: event,
      },
      null,
      2
    ),
  };

};
