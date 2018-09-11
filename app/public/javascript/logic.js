//for the question form.
  $(document).ready(function(){
    $('select').formSelect()
  })

  //on survey submit.
  $("#submit").on("click", function(){
    // To make sure all questions were answered.
    let validateForm = () => {
    let isValid = true
    $('.validate').each(function() {
      if ( $(this).val() === '' )
          isValid = false;
    })
    $('.selectedChoice').each(function() {
      if( $(this).val() === '')
        isValid = false
    })
    return isValid
  }
  if (validateForm() == true) {
    // Create an object for the user data.
      let friendData = {
        name: $("#name").val(),
        photo: $("#photo_url").val(),
        scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
      }
      let currentURL = window.location.origin

      $.post(currentURL + "/api/friends", friendData, function(data) {
        $("#matchName").text(data.name)
        $('#matchImg').attr("src", data.photo)
        $('.modal').modal()
        $('.modal').modal('open')
      });
  }
  else
  {
    alert("Please fill out all fields before submitting!")
  }
    return false
  })

  
  $('.modal-close').on('click', function() {
    window.location.href = "home.html"
  })
