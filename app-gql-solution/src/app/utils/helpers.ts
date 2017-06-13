export const DEFAULT_PROFILE_USERNAME = 'happy-lama'
export const DEFAULT_PROFILE_PIC = 'http://i1.kym-cdn.com/photos/images/original/000/869/487/ccf.png'

export const timeSince = (date) => {
  if (typeof date !== 'object') {
    date = new Date(date);
  }

  var seconds = Math.floor(
    ((new Date()).valueOf() - date) / 1000);
  var intervalType;

  var interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = 'year';
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = 'month';
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = 'day';
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = "hour";
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = "minute";
          } else {
            interval = seconds;
            intervalType = "second";
          }
        }
      }
    }
  }

  if (interval > 1 || interval === 0) {
    intervalType += 's';
  }

  return interval + ' ' + intervalType + ' ago';
};