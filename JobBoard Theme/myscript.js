// SET PROFILE IMAGE
$("#choose-profile-image").change(function (e) {
  var reader = new FileReader();

  reader.onload = function (event) {
    $(".profile-image").attr("src", event.target.result);
  };
  reader.readAsDataURL(e.target.files[0]);
});

//STYLE SELECT
$("select").focus(function () {
  $(".first").hide();
  $(this).css("color", "#324148");
  $(".arrow-g").addClass("arrow-change");
});
$("select").focusout(function () {
  $(".first").show();
  if ($(this).val() == "") {
    $(this).css("color", "#cdcdcd");
    $(".arrow-g").removeClass("arrow-change");
  }
});
$("select").change(function () {
  $(this).css("border-color", "#1a1a1a");
  if ($(this).parent().hasClass("arrow-g"))
    $(this).addClass("arrow-change");
});

function styleSelect() {
  $select = $("select");
  if ($select.val() == "") $($select).css("color", "#cdcdcd");
}

// REMOVE FILE FROM SERVER
function removeFromServer(delUrl) {
  var req = $.ajax({
    dataType: "json",
    url: delUrl,
    type: "DELETE"
  });
}

// REMOVE FILE FROM THE WEBPAGE
function remove(e) {
  $(e).fadeOut("slow");
  window.setInterval(function () {
    $(e).remove();
  }, 1000);
}

// APPEND THE FILE NAME TO THE WEBPAGE
function createList(text, delURL, check) {
  $file = $(".prototype")
    .clone()
    .removeClass("prototype");
  $file.children("i").click(function () {
    remove($(this).parent());
    if (delURL) removeFromServer(delURL);
    if (check) {
      checkEmpty();
    }
  });
  $file.children(".file-name").val(text);
  $file.appendTo($(".uploaded-files"));
  $file.fadeIn("slow");
}
deleteUrls = [];
// UPLOAD THE FILE TO SERVER
$(function () {
  $(".file-upload").fileupload({
    dataType: "json",
    done: function (e, data) {
      if ($(this).hasClass("check")) {
        check = true;
      } else {
        check = false;
      }
      $.each(data.result.files, function (index, file) {
        deleteUrls.push(file.deleteUrl);
        createList(file.name, file.deleteUrl, check);
      });
    }
  });
});

// SELECT 2
$(".degree-selector").select2({
  placeholder: "Select degree",
  allowClear: true
});


// STYLE THE SELECT-2
$(".myselect-2").change(function () {
  $(this).next().find("b").css("border-top-color", "#324148");
  $(this).next().css("border-color", "#324148");
})

// DATEPICKER
$(".date-picker").datepicker();

// CHECK FOR ANY UPLOADED FILES TO THE WEBPAGE
$(".popup-form").change(checkEmpty);

function checkEmpty() {
  window.setTimeout(function () {
    if ($(".uploaded").length > 1) $(".popup-chosen-file").hide();
    else $(".popup-chosen-file").show();
  }, 1000);
}

// STYLE THE LOAD FILE SELECT ITEM FROM JOB DESCRIPTION
$(".load-file").change(function () {
  createList($($(this).find("option:selected")).html(), false, true);
  $(this).val("");
  $(this).css("color", "#cdcdcd");
  $(this).parent().removeClass("arrow-change");
  $(this).css("border-color", "#e0e0e0");

});

// REMOVE FILES FROM SERVER THAT ARE UPLOADED WITHOUT SUBMIT
$(document).ready(function () {
  window.onunload = function () {
    deleteUrls.forEach(removeFromServer);
  };
  window.onbeforeunload = function (e) {
    deleteUrls.forEach(removeFromServer);
  };

})


// CLEAR THE TEMP URLS FROM ARRAY AFTER SUBMITTING A FORM
$("form").submit(function () {
  deleteUrls = [];
});