
async function loadFileList() {
    try {
        const container = document.getElementById("files-list");
        const response = await fetch("http://localhost:3000/load-files");
        container.innerHTML = "";
        const data = await response.json();

        data.forEach(file => {
            const now = new Date();
            const item = document.createElement("div");
            item.className = "file-item";
            item.innerHTML = `
            <div style='display: flex; align-items: center;'>
            <svg class='file-icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>

            <span class='filename'>${file.filename}</span>
            </div>
            <div class='file-date'>${now.toLocaleString()}</div>
            `;
            container.append(item);
        });
    }
    catch (err) {
        //TODO add popup
        console.log("Server Error");
    }
}

loadFileList();