function updateResult(result) {
  $('#result-msg').text('');
  $('#result-msg').text(result);
}

function populateTable(repoList) {
  for (var i = 0; i < repoList.length; i++) {
    $('#repo_table tbody').append('<tr><td>' + repoList[i].name + '</td></tr>');
  }
}

$('#search_btn').click(function () {

  var userName = $('#username').val();
  console.log(userName);

  $.ajax({
    dataType: 'json',
    url: 'https://api.github.com/users/' + userName + '/repos',

    error: function (err) {
      updateResult(userName + ' ' + err.statusText);
    },

    success: function (data) {
      updateResult(data.length + ' repos');
      populateTable(data);
    },
  });

});
