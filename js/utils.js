var sleep = function(milisec, callback) {
  setTimeout(function() { 
    if (typeof callback != 'undefined') {
      callback();
    }
  }, milisec);
}

var getCurrentDatetimeUTC = function(format) {
  obj_date = new Date();
  year = obj_date.getUTCFullYear();
  month = obj_date.getUTCMonth() + 1;
  date = obj_date.getUTCDate();
  hours = obj_date.getUTCHours();
  minutes = obj_date.getUTCMinutes();
  seconds = obj_date.getUTCSeconds();
  temp_arr = [year, month, date, hours, minutes, seconds]
  for (i = 0; i < temp_arr.length; i++) {
    if (temp_arr[i] < 10) {
      temp_arr[i] = '0' + temp_arr[i];
    }
  }
  if(format == "ISO-8601") {
    return temp_arr[0] + '-' + temp_arr[1] + '-' + temp_arr[2] + 'T' + temp_arr[3] + ':' + temp_arr[4] + ':' + temp_arr[5] + 'Z';
  } else {
    return temp_arr[0] + '/' + temp_arr[1] + '/' + temp_arr[2] + ' ' + temp_arr[3] + ':' + temp_arr[4] + ':' + temp_arr[5];
  }
}

var debugOutput = function(msg) {
  switch($.type(msg.data)) {
    case "array":
      console.log(msg.text + " " + msg.data);
      break;
    case "object":
      console.log(msg.text + " " + JSON.stringify(msg.data));
      break;
    case "undefined":
      console.log(msg.text);
      break;
    default:
      console.log(msg.text + " " + msg.data);
      break;
  }
}
