$("img").click(function () {
  var thisPicture = $(this).attr('src')[13];
  var thisPicture = parseInt(thisPicture);
  var nextPicture = (thisPicture + 1) % 5;
  console.log(thisPicture);
  console.log(nextPicture);
  var newSource = "/images/puppy" + nextPicture + ".jpg";
  $(this).attr('src', newSource);
});

$("li p").hide();

$("li").click(function () {
  var description = $(this).children("p");
  if (description.is(":visible")) {
    description.hide();
  } else {
    $("li p").hide();
    description.show();
  }
});

$("form").hide();
$("h3").click(function () {
  $("form").show();
});

$("form").submit(function (event) {
  var title = $("#title").val();
  var body = $("#body").val();
  if (title.length == 0 || body.length == 0) {
    $(".errors").empty();
    var errors  = [];
    if (title.length == 0) {
      errors.push("You must include a title, woof");
    }
    if (body.length == 0) {
      errors.push("You must include a body, woof");
    }
    for(var i = 0; i < errors.length; i++) {
      var error  = errors[i];
      $(".errors").append("<li>" + error + "</li>");
    }
    event.preventDefault();
  }
});

