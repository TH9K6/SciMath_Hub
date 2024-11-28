function changeTheme() {
    let CSSlink = document.querySelector("#stylesheet");
    if (CSSlink.href.includes("SciMathHub.css")) {
        CSSlink.href = "SciMathHub2.css";
    } else {
        CSSlink.href = "SciMathHub.css";
    }
}