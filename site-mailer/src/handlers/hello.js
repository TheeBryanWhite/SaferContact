'use strict';

module.exports.staticSiteMailer = async function(context, req) {
  const formData = JSON.parse(event.body);

  if (formData) {
    context.res = {
      // status: 200, /* Defaults to 200 */
      sendEmail(formData, function mailCB(err, data) {
        const response = {
          statusCode: err ? 502 : 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
          },
          body: JSON.stringify({
            message: err ? err.message : data,
          }),
        };
        
        callback(null, response);
      });
    };
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a name on the query string or in the request body',
    };
  }
};
