const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
    });
	};
$(document).ready(function() {
	$('.select').niceSelect();
});
$('.add-emp, .edit').click(function (){
	$('.modal').addClass('active');
});
$('.modal-close').click(function (){
	$('.modal').removeClass('active');
});
$('.burger').click(function () {
		$('.aside').addClass('active');
});
$('.burger-x').click(function () {
		$('.aside').removeClass('active');
});
$('.aside-list>li>a').click(function () {
	$(this).next('.aside-list__drop').toggle("slow");
});
$('#label-1').click(function () {
	if ($('#checkbox-1').is(':checked')){
		$('#check-block-1 input:checkbox').prop('checked', false);
	} else {
		$('#check-block-1 input:checkbox').prop('checked', true);
	};
});
$('#label-2').click(function () {
	if ($('#checkbox-2').is(':checked')){
		$('#check-block-2 input:checkbox').prop('checked', false);
	} else {
		$('#check-block-2 input:checkbox').prop('checked', true);
	};
});
$('#label-3').click(function () {
	if ($('#checkbox-3').is(':checked')){
		$('#check-block-3 input:checkbox').prop('checked', false);
	} else {
		$('#check-block-3 input:checkbox').prop('checked', true);
	};
});
$('#label-4').click(function () {
	if ($('#checkbox-4').is(':checked')){
		$('#check-block-4 input:checkbox').prop('checked', false);
	} else {
		$('#check-block-4 input:checkbox').prop('checked', true);
	};
});

// $('#big-calendar__months').datepicker({
//     firstDay: 0,
//     weekends: [0],
//     inline: true,
//     showOtherMonths: false,
//     multipleDates: true,
//     view: "days",
//     navTitles: {
//         days: 'MM <i>yyyy</i>',
//         months: 'yyyy',
//         years: 'yyyy'
//     }
// });

$('#calendar').calendar({ //https://www.bootstrap-year-calendar.com/
    language: "ru",
    clickDay: function(e) {
        $(e.element).children('.day-content').toggleClass('active');
    }
});