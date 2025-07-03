// these functions will be visible to other files
module.exports = {
  format_date: function (date) {
    const options = {
      year: '2-digit',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'long',
      timeZone: 'America/Denver'
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedDate = formatter.format(date);
    
    return formattedDate;
  },
  // another_shared_func: function () {
  //   // whatever
  // }
};

// these functions will stay private/hidden within this file
// var example_not_shared = function () {
// }