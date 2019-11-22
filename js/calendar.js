$('#calendar').calendar({ //https://www.bootstrap-year-calendar.com/
    language: "ru",
    clickDay: function(e) {
        $(e.element).children('.day-content').toggleClass('active');
    }
});