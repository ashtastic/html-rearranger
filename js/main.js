var $h1Below = $('<h1>');
$h1Below.html('Below ground veggies');
$('body').prepend($h1Below);

var $ulBelow = $('<ul>');
$h1Below.append($ulBelow);

var $liBelow = $('<li>');
$ulBelow.prepend($liBelow);

$liBelow.hasClass('below');

var $h1Above = $('<h1>');
$h1Above.html('Above ground veggies');
$('body').prepend($h1Above);

var $ulAbove = $('<ul>');
$h1Above.append($ulAbove);

var $liAbove = $('<li>');
$ulAbove.prepend($liAbove);

$liAbove.hasClass('above');

$('ul li').each(function () {
  if ($(this).hasClass('below')){
    $ulBelow.append($(this));
  } else {
    $ulAbove.append($(this));
  }
});




