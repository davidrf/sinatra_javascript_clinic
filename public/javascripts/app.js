$("img").click(function () {
  var pictureNumber = $(this).attr('src')[13];
  pictureNumber = parseInt(pictureNumber);
  var nextPictureNumber = (pictureNumber + 1) % 5;
  var newSource = "/images/puppy" + nextPictureNumber + ".jpg";
  $(this).attr('src', newSource);
});

$("li p").hide();

$("li").click(function () {
  var body = $(this).children("p");
  if (body.is(':hidden')) {
    $("li p").hide();
    body.show();
  } else {
    body.hide();
  }
});

$("form").hide();
$("h3").click(function () {
  $("form").show();
});
