let message;
message = 'abc';
let endWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');