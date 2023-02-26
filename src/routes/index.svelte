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
<div id="popup-window" style="width: 400px;height: 500px">
    <button on:click={getUrl}>run</button>

    <div>The current URL is: {url}</div>

    <p>note: run the "dev:extension" script for hot reloading.</p>
</div>

<style>
    #popup-window {
        box-sizing: border-box;
        padding: 8px;
        max-width: 800px;
        max-height: 600px;
        min-width: 200px;
        min-height: 150px;
        resize: vertical;
        overflow: auto;
    }
</style>