function setTheme(theme) {
    document.body.className = theme === 'light' ? '' : theme;
}

/* Contact form */
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("message").innerText =
        "Thank you! Your message has been sent.";
});
