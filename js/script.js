$.ajax({
  dataType: 'json',
  url: 'db/quotes.min.json'
}).done(function(data) {

  function getQuote() {
    var randomQuote = data[Math.floor(Math.random() * data.length)];
    var quoteDiv = '<span class="fa fa-quote-left"></span>' +
    '<q> ' + randomQuote.quote + ' </q>' +
    '<span class="fa fa-quote-right"></span>' +
    '<div id="source">&mdash; ' + randomQuote.source + '</div>' +
    '<div class="text-right">' +
      '<a class="btn" href="" target="_blank" id="tweet"><span class="fa fa-twitter fa-lg"></span> Tweet</a>' +
    '</div>';
    $('.well').html(quoteDiv);
    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + '\"' + randomQuote.quote + '\"' + ' — ' + randomQuote.source);
  }

  getQuote();

  $('#new-quote').click(function() {
    getQuote();
  });
}).fail(function() {
  $('.container-fluid').html('<div class="alert alert-warning"><span class="fa fa-warning fa-lg fa-fw"></span> Unable to load a new quote.</div>');
});
