<script lang="ts">
    let url = "";

    async function getUrl() {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'modify'}, (resp) => {
                console.log("Page modified");
            })
        })
    }
</script>
<div>
    <button on:click={getUrl}>run</button>

    <div>The current URL is: {url}</div>

    <p>note: run the "dev:extension" script for hot reloading.</p>
</div>