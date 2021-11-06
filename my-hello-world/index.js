console.log('Loading function');

exports.handler = async (event, context) => {
    console.log("I the handler have seen your request so just relax")
    return 'Blank response'
    // console.log('called handler function with eventt:', JSON.stringify(event, null, 2));
    // console.log('value1 =', event.key1);
    // console.log('value2 =', event.key2);
    // console.log('value3 =', event.key3);
    // return 'Event response value 1 is' + event.key1 
    // return event.key1;  // Echo back the first key value
    // throw new Error('Something went wrong');
};

