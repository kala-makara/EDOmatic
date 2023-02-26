chrome.runtime.onMessage.addListener((req, src, resp) => {
    if (req.action === "modify") {
        const body = document.querySelector("body");
        if (body) {
            body.style.backgroundColor = "red";
        }

        resp({ message: "modified" });
    }
});
