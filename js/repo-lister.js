
$('#search_btn').click(function () {

  var userName = $('#username').val();
  console.log(userName);

  $.ajax({
    dataType: 'json',
    url: 'https://api.github.com/users/' + userName + '/repos',
    success: function (data) {
      console.log('success');
    },

    error: function (err) {
      console.log('fail');
      console.log(err.statusText);
    },

    success: function (data) {
      console.log('success');
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
      }
    },
  });
});
