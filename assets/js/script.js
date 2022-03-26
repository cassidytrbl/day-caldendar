$(document).ready(function() {
    var currentTime = GetCurrentHour("LT")
    console.log(currentTime)
    var timeMaps = [
        '9:00am',
        '10:00am',
        '11:00am',
        '12:00pm',
        '1:00pm',
        '2:00pm',
        '3:00pm',
        '4:00pm',
        '5:00pm',
    ];

    $('.save').on('click', function(){
        typing = $(this).siblings('.typing').val();
        time = $(this).siblings('.time').text()
        console.log(typing)
        console.log(time)
        localStorage.setItem(time, typing)

        //notification of save
    })
    function incrementTextHour()
    {
        if(text_Hour === 12)
        {
            text_Hour = 1;
        }
        else if(text_Hour === 11)
        {
            text_Suffix = ":00pm";
            text_Hour++;
        } else
        {
            text_Hour++;
        }
    }
    
    function DisplayDate(pFormat)
    {
        var date = moment().format(pFormat);
    
        $("#current-date").text(date);
    }
    
    function GetCurrentHour(pFormat)
    {
        var time = moment().format(pFormat).toLowerCase();
    
        time = time.split("");
    
        var suffix = "";
    
        var hour = parseHour(time);
    
        console.log(hour);
    
        if(time[time.length - 2] === "p")
        {
            console.log("afternoon");
            suffix = ":00pm";
        }
        else
        {
            console.log("morning");
            suffix = ":00am";
        }
    
        console.log(hour + suffix);
        return hour + suffix;
    }
    
    function parseHour(pTime)
    {
        var i = 0;
        var iHour = "";
    
        while(pTime[i] !== ":" || i > 100)
        {
            iHour += pTime[i];
            i++;
        }
    
        return iHour;
    }

    function correctHour(hour)  {
        console.log(correctHour)
        console.log(currentTime)
        console.log(parseHour(currentTime)) 
     if ( timeMaps.indexOf(hour) < timeMaps.indexOf(currentTime)) {
            return "past";
        } else if ( timeMaps.indexOf(hour) == timeMaps.indexOf(currentTime)) {
            return "present";
        } else {
            return "future";
        }
     
    }
    $('#hour-9').addClass(correctHour('9:00am'));
    $('#hour-10').addClass(correctHour('10:00am'));
    $('#hour-11').addClass(correctHour('11:00am'));
    $('#hour-12').addClass(correctHour('12:00pm'));
    $('#hour-1').addClass(correctHour('1:00pm'));
    $('#hour-2').addClass(correctHour('2:00pm'));
    $('#hour-3').addClass(correctHour('3:00pm'));
    $('#hour-4').addClass(correctHour('4:00pm'));
    $('#hour-5').addClass(correctHour('5:00pm'));
})

$('#hour-9 .typing').val(localStorage.getItem('9 a.m.'));
$('#hour-10 .typing').val(localStorage.getItem('10 a.m.'));
$('#hour-11 .typing').val(localStorage.getItem('11 a.m.'));
$('#hour-12 .typing').val(localStorage.getItem('12 a.m.'));
$('#hour-1 .typing').val(localStorage.getItem('1 p.m.'));
$('#hour-2 .typing').val(localStorage.getItem('2 p.m.'));
$('#hour-3 .typing').val(localStorage.getItem('3 p.m.'));
$('#hour-4 .typing').val(localStorage.getItem('4 p.m.'));
$('#hour-5 .typing').val(localStorage.getItem('5 p.m.'));