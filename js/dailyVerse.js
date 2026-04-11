// run script once the page loads
document.addEventListener("DOMContentLoaded", function()
{

    // Array of Bible verse... to eventually be moved elswhere... currently hard coded
    const verses =
    [
        "Der Herr ist mein Hirte, mir wird nichts mangeln. - Psalm 23,1",
        "Ich vermag alles dur den, der mich stark macht. - Philipper 4,13",
        "Der Herr ist mein Licht und mein Heil. - Psalm 27,1",
        "Seid stark und mutig! - Josua 1,9"
    ];

    // Array of Background images to pair with above verses This is no longer used... as they make the screen to cluttered. A nice solid blue background works for the time being. Perhaps will change later on 
    const images =
    [
        "images/dbv/dbv1.webp",
        "images/dbv/dbv2.webp",
        "images/dbv/dbv3.avif",
        "images/dbv/dbv4.avif",
        "images/dbv/dbv5.avif",
        "images/dbv/dbv6.avif",
        "images/dbv/dbv7.avif",
        "images/dbv/dbv8.avif",
        "images/dbv/dbv10.avif",
        "images/dbv/dbv11.avif",
        "images/dbv/dbv12.avif",
        "images/dbv/dbv13.avif",
        "images/dbv/dbv14.avif",
        "images/dbv/dbv15.avif",
        "images/dbv/dbv16.avif",
        "images/dbv/dbv17.avif",
        "images/dbv/dbv18.avif",
        "images/dbv/dbv19.avif",
        "images/dbv/dbv20.avif"
    ];

    // get present day
    const now = new Date();

    // to then calculate day number of year
    function getDayIndex()
    {
        // Create date object which would represent the start of the year
        let start = new Date(now.getFullYear(), 0, 0);

        // to calculate difference between now vs start of year
        let diff = now - start;

        // convert milliseconds to days
        let days = diff / (1000 * 60 * 60 * 24);

        // return integer day where floor gets ride of fractional day
        return Math.floor(days);
    }

    // check if popup needs to be shown
    function shouldShowPopup()
    {
        // get last date popup shown
        let lastShown = localStorage.getItem("verseLastShown");

        // using toDateString to simplify
        let today = now.toDateString();

        // only show after 5am time restriction... currently unused
        /*if (now.getHours() < 5)
        {
            return false;
        }
        */

        // if already shown, don't show
        if (lastShown == today)
        {
            return false;
        }

        return true;
    }

    // responsible for displaying verse popup
    function showVersePopup()
    {
        // current day index
        let index = getDayIndex();

        // pick verse and image to pair together
        let verse = verses[index % verses.length];

        // select corresponding image to pair with verse... this isn't currently but used, but saved in case I decixe to use it in future
        let image = images[index % images.length];

        // Get modal container from DOM 
        let modal = document.getElementById("verse-modal");

        // get element to insert verse
        let text = document.getElementById("verse-text");

        // a just in case null check... ensure elements exist
        if (!modal || !text)
        {
            console.log("Modal elements not found");
            return;
        }

        // make modal visible 
        modal.style.display = "flex";

        // set background image
        modal.style.backgroundImage = "#2c3e50";

        // insert the verse
        text.innerText = verse;

        // store that verse has indeed been shown today
        let today = now.toDateString();
        localStorage.setItem("verseLastShown", today);
    }

    // quick check
    if (shouldShowPopup())
    {
        showVersePopup();
    }

});
