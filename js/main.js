$('.com-card__info').click(function() {
    $('.modal').addClass('active');
});
$('.modal-close').click(function() {
    $('.modal').removeClass('active');
});
$('.burger').click(function() {
    $('.aside').addClass('active');
});
$('.burger-x').click(function() {
    $('.aside').removeClass('active');
});
if ($('*').hasClass("calendar")) {
  $('#calendar').datepicker({
    firstDay: 0,
    weekends: [0],
    inline: true,
    showOtherMonths: false,
});
}

$('.set-time h2').click(function() {
    $(this).toggleClass('active');
});
$('.set-time h2').click(function() {
    $(this).next('.js-set-time').slideToggle();
});
if ($('*').hasClass("select")) {
	$('.select').niceSelect();
}
$('.user-modal__cap.js').click(function() {
    $(this).toggleClass('active');
});
$('.user-modal__cap.js').click(function() {
    $(this).next('.js-user').slideToggle();
});