// run script once the page loads
document.addEventListener("DOMContentLoaded", function()
{

    // Array of Bible verse... to eventually be moved elswhere
    const verses =
    [
        "Der Herr is mein Hirte, mir wird nichts mangeln. - Psalm 23,1",
        "Ich vermag alles dur den, der mich stark macht. - Philipper 4,13",
        "Der Herr ist mein Licht und mein Heil. - Psalm 27,1",
        "Seid stark und mutig! - Josua 1,9",
        ""
    ];

    // Array of Background images to pair with above verses
    const images =
    [
        "images/dbv1.webp",
        "images/dbv2.webp",
        "images/dbv3.avif",
        "images/dbv4.avif",
        "images/dbv5.avif",
        "images/dbv6.avif",
        "images/dbv7.avif",
        "images/dbv8.avif",
        "images/dbv10.avif",
        "images/dbv11.avif",
        "images/dbv12.avif",
        "images/dbv13.avif",
        "images/dbv14.avif",
        "images/dbv15.avif",
        "images/dbv16.avif",
        "images/dbv17.avif",
        "images/dbv18.avif",
        "images/dbv19.avif",
        "images/dbv20.avif"
    ];

    // get present day
    const now = new Date();

    // to then calculate day number of year
    function getDayIndex()
    {
        let start = new Date(now.getFullYear(), 0, 0);
        let diff = now - start;

        // convert milliseconds to days
        let days = diff / (1000 * 60 * 60 * 24);

        return Math.floor(days);
    }

    // check if popup needs to be shown
    function shouldShowPopup()
    {
        let lastShown = localStorage.getItem("verseLastShown");

        // using toDateString to simplify
        let today = now.toDateString();

        // only show after 5am
        if (now.getHours() < 5)
        {
            return false;
        }

        // if already shown, don't show
        if (lastShown == today)
        {
            return false;
        }

        return true;
    }

    function showVersePopup()
    {
        let index = getDayIndex();

        // pick verse and image to pair together
        let verse = verses[index % verses.length];
        let image = images[index % images.length];

        let modal = document.getElementById("verse-modal");
        let text = document.getElementById("verse-text");

        // a just in case null check
        if (!modal || !text)
        {
            console.log("Modal elements not found");
            return;
        }

        modal.style.display = "flex";

        // set background image
        modal.style.backgroundImage = "url(" + image + ")";

        // insert the verse
        text.innerText = verse;

        // store that verse has indeed been shown today
        localStorage.setItem("verseLastShown", today);
    }

    // quick check
    if (shouldshowPopup())
    {
        showVersePopup();
    }

});
