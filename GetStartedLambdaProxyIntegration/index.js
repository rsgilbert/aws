'use strict';

console.log('Loading hello world function');

exports.handler = async event => {
    let name = 'you';
    let city = 'World';
    let time = 'day';
    let day = '';
    let responseCode = 200;
    console.log('Request:', JSON.stringify(event))
    
    
    if(event.queryStringParameters && event.queryStringParameters.name) {
        console.log('Received name', event.queryStringParameters.name)
        name = event.queryStringParameters.name;
    }
    
    if(event.queryStringParameters && event.queryStringParameters.city) {
        console.log('Received city', event.queryStringParameters.city)
        city = event.queryStringParameters.city;
    }
    
    if(event.headers && event.headers['day']) {
        console.log('Received day header:', event.headers.day)
        day = event.headers.day;
    }
    if(event.body) {
        let body = JSON.parse(event.body)
        if(body.time) {
            console.log('Received time is', body.time)
            time = body.time;
        }
    }
    
    let greeting = `Good ${time}, ${name} of ${city}`;
    if(day) greeting += ` Happy ${day}`;
    
    let responseBody = {
        message: greeting,
        input: event
    }
    
    // The output from a Lambda proxy integration must be in the 
    // following JSON object.
    // body must be a JSON string.
    let response = {
        statusCode: responseCode,
        headers: {
            'x-custom-header': 'my custom header value'
        },
        body: JSON.stringify(responseBody)
    }
    console.log('Response:', JSON.stringify(response))
    return response;
    
}