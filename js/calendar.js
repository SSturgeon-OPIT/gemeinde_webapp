/* create constant variable that will store array of yearly Gemeinde Church Events  */
alert("JS is up and running");
const churchEvents =
[{
    title: "Sonntag - Bibel Stunde", 
    start: "2026-03-29T10:00",
    end:   "2026-03-29T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Chris McQueen",
        Präsidium: "Marcus Bauer",
        Sprecher: "Peter Neuburger"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-04-05T10:00",
    end:   "2026-04-05T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Cornel Motogna",
        Präsidium: "Volker Imhof",
        Sprecher: "Samuel Bogner"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-04-12T10:00",
    end:   "2026-04-12T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Jonathan Ramsden",
        Präsidium: "Marco Seitter",
        Sprecher: "Hartmut Sieber"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-04-19T10:00",
    end:   "2026-04-19T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Emanuel Fischer",
        Präsidium: "Martin Bogner",
        Sprecher: "Tobias Wachauf"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-04-26T10:00",
    end:   "2026-04-26T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Florentin Støvhase",
        Präsidium: "Micha Imhof",
        Sprecher: "Michael Siller"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-05-03T10:00",
    end:   "2026-05-03T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Jochen Pokowietz",
        Präsidium: "Johannes Bogner",
        Sprecher: "Chris McQueen"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-05-10T10:00",
    end:   "2026-05-10T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Günter Seyfang",
        Präsidium: "Volker Imhof",
        Sprecher: "Marcus Bauer"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-05-17T10:00",
    end:   "2026-05-17T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Jochen Pokowietz",
        Präsidium: "Cornel Motogna",
        Sprecher: "Micha Imhof"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-05-24T10:00",
    end:   "2026-05-24T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Peter Siller",
        Präsidium: "Tobias Wachauf",
        Sprecher: "Emanuel Fischer"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-05-31T10:00",
    end:   "2026-05-31T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Tobias Wachauf",
        Präsidium: "Johannes Bogner",
        Sprecher: "Rüdiger Fischer"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-06-07T10:00",
    end:   "2026-06-07T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Micha Imhof",
        Präsidium: "Emanuel Fischer",
        Sprecher: "Gabor Urban"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-06-14T10:00",
    end:   "2026-06-14T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Chris McQueen",
        Präsidium: "Rüdiger Fischer",
        Sprecher: "Cornel Motogna"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-06-21T10:00",
    end:   "2026-06-21T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Peter Siller",
        Präsidium: "Emanuel Fischer",
        Sprecher: "Marco Seitter"

    }
 },
 {
    title: "Sonntag - Bibel Stunde", 
    start: "2026-06-28T10:00",
    end:   "2026-06-28T12:00",
    color: "#2ecc71",
    extendedProps:
    {
        Empfang: "Johannes Bogner",
        Präsidium: "Marcus Bauer",
        Sprecher: "Chris McQueen"

    }
 }
];

/* */
document.addEventListener('DOMContentLoaded', function ()
{
    /* Receive Receive HTML object with "getElementById" where the calendar will be shown */
    const calendarEl = document.getElementById('calendar');

    /* Create FullCalendar instance, connecting it to previous HTML object */
    const calendar = new FullCalendar.Calendar(calendarEl,
        {
            /* view, in german, starts on Monday, with auto height */
            initialView: 'dayGridMonth',
            locale: 'de',
            firstDay: 1, 
            height: 'auto',

            /* header buttons to be shown in Calendar */
            headerToolbar:
            {
                /*  Buttons, left-> buttons on left, center-> buttons on center, right-> different calendar display options */
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,listMonth'
            },
            /* Retrieve events from Array at top */
            events: churchEvents,

            /* Show popup upon click */
            eventClick: function(info)
            {
                /* Call showEventDetails function */
                showEventDetails(info.event);
            }
        });
        /* Render Calendar */
        calendar.render();
});

/* This function displays upon popup being clicked */ 
function showEventDetails(event)
{
    /* Make visible */
    document.getElementById("event-modal").style.display = "block";

    /* Make title the title of event  */
    document.getElementById("modal-title").textContent = event.title;

    /* This shows the start and end time of the event upon popup */
    document.getElementById("modal-time").textContent = event.start.toLocaleString() + " - " + (event.end ? event.end.toLocaleString() : " ");

    /* Retrieve the data stored in extendedProps */
    const d = event.extendedProps;

    /* Insert the below custom event details into the popup click */
    document.getElementById("modal-description").innerHTML = 
    `Empfang: ${d.Empfang}<br>
    Präsidium: ${d.Präsidium}<br>
    Sprecher: ${d.Sprecher}`;
}

/* Function to close popup */ 
function closeModal() 
{
    /* Hides the popup */
    document.getElementById("event-modal").style.display = "none";
}

