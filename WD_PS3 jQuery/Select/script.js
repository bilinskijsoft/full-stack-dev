friends = [
    "first friend",
    "second friend",
    "third friend",
];

imgs = [
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
];

$(document).ready(function () {
    for(i in friends){
        html = '<div customId="' + i + '"class="custom_select_element custom_select_dropdown_element"><img class="custom_select_icon" src="'+imgs[i]+'"><div class="custom_select_name">' + friends[i] + '</div></div>';
        $("#custom_select_values").append(html);
    }

    $("#custom_select_selected").click(function () {
        if($("#custom_select_values").css("display") === "none"){
            $(".custom_select").addClass("custom_select_active");
            $("#custom_select_values").slideDown();
        } else {
            $(".custom_select").removeClass("custom_select_active");
            $("#custom_select_values").slideUp();
        }
    });

    $(".custom_select_dropdown_element").click(function () {
        id = $(this).attr('customId');

        $("#select_selected_icon").attr('src', imgs[id]).show();
        $("#select_selected_name").text(friends[id]).removeClass("element_not_selected");

        $(".custom_select").removeClass("custom_select_active");
        $("#custom_select_values").slideUp();
    })
})