function ColorLog(type, message) {
    // Set the default text color
    let textColor = "white";
    // Set the default background color based on the type
    let backgroundColor;

    switch (type) {
        case "error":
            backgroundColor = "#1020dd";
            break;
        case "warn":
            backgroundColor = "#1010b0";
            break;
        case "log":
        default:
            backgroundColor = "#0010b0";
            break;
    }

    console.log(
        `%c${message}`,
        `color:${textColor}; background-color:${backgroundColor};`
    );
}

ColorLog("log", "returnToTwitter loaded");

let attempts = 0;

function runScript() {
    try {
        if (localStorage.getItem("settings") === "true") {
            ColorLog("log", "new inferior logos detected, ELIMENATE 🤖");
            const svgElement = document.querySelector(".r-13v1u17.r-4qtqp9.r-yyyyoo.r-16y2uox.r-8kz0gk.r-dnmrzs.r-bnwqim.r-1plcrui.r-lrvibr.r-lrsllp");
            if (svgElement) {
                // Step 1: Create a new <img> element
                let imgElement = document.createElement("img");
                imgElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553";
                imgElement.alt = "twitters / x's old logo";
                imgElement.style = "max-height: 30px";

                // Step 2: Replace the original SVG element with the new <img> element
                svgElement.replaceWith(imgElement);
            }
        }
    } catch (error) {
        ColorLog("warn", "error, no 'enabled' setting found, creating a new one with the default value of enabled");
        localStorage.setItem("settings", "true");
    }

    attempts++;

    // Stop after 100 attempts
    if (attempts >= 100) {
        clearInterval(interval);
        ColorLog("log", "100 attempts completed. Stopping the script.");
    }
}

// Run the script once every second (1000 milliseconds)
const interval = setInterval(runScript, 100);


ColorLog("log", "returnToTwitter Executed");

