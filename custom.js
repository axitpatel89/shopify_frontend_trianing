$(document).ready(function () {
  $("form").submit(function () {
    var name = $(this).find("#first-name").val();
    var size = $(this).find("#size").val().toUpperCase();
    var activities = [];

    $(":checkbox:checked").each(function (i) {
      activities[i] = $("label[for='" + $(this).attr("id") + "']").text();
    });

    activities = activities.join(", ");

    var form_results =
      '<div class="result-record"><h3>Result</h3><br><div class="form-group"><label>Name: </label><span>' +
      name +
      '</span></div><div class="form-group"><label>Size: </label><span>' +
      size +
      '</span></div><div class="form-group"><label>Activities: </label><span>' +
      activities +
      "</span></div></div>";

    $(".result-record-container").append(form_results);

    $(this).find("#first-name").val("");
    $(this).find("#size").val("");
    $(this).find(":checkbox").prop("checked", false);
    return false;
  });
});
