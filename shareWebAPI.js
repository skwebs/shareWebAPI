(function () {
  'use strict';
  //Check if share API is supported or not
  if (navigator.share !== undefined) {
    document.addEventListener('DOMContentLoaded', function() {
      var shareBtn = document.querySelector('.share');
      //Share button event listener
      shareBtn.addEventListener('click', function(event) {
        //Web share API
        navigator.share({
          title: document.title,
          text: '', //'Anshu Memorial Academy (AMA)',
          url: window.location.href
        })
        .then(function() {
          console.info('Shared successfully.');
        })
        .catch(function (error) {
          console.error('Error in sharing: ', error);
        })
      });
    });
  }
})();
