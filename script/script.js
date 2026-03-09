const btnAll = document.getElementById("btn-all");
const btnOpen = document.getElementById("btn-open");
const btnClosed = document.getElementById("btn-closed");
const totalIssue = document.getElementById('total-issues');

document.getElementById("btn-all").addEventListener("click", () => {
    filterIssues("all");
});
document.getElementById("btn-open").addEventListener("click", () => {
    filterIssues("open");
});
document.getElementById("btn-closed").addEventListener("click", () => {
    filterIssues("closed");
});

// button toggle stye
function toggleStyle(id) {
  [btnAll, btnOpen, btnClosed].forEach((btn) => {
    btn.classList.remove("btn-primary");
    btn.classList.add("btn-soft");
  });

  const currentBtn = document.getElementById(id);

  currentBtn.classList.remove("btn-soft");
  currentBtn.classList.add("btn-primary");
}

let allIssues = [];

const loadIssues = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
    const data = await res.json();
    allIssues = data.data
    
    displayIssues(data.data); // showing all section by default
};
loadIssues();

const filterIssues = (status) => {
    if (status === "all") {
        displayIssues(allIssues);
        totalIssueHandler(allIssues.length);
        return;
    }
    const filtered = allIssues.filter(issue => issue.status === status);
    // console.log(filtered);
    totalIssueHandler(filtered.length)
    displayIssues(filtered);
};

const totalIssueHandler = (count) => {
    totalIssue.innerText = `${count} Issues`;
    
}

const labelsHandler = (arr) => {
    const htmlElement = arr.map((el) => `<div class="rounded-full bg-[#fde68a]">
                <span class="text-gray-600 p-2 font-medium text-xs">${el}</span>
              </div>`)
    return htmlElement.join(" ");
}


const displayIssues = (issue) => {
  const allCardSection = document.getElementById("card-section");
    allCardSection.innerHTML = "";
    const priorityStyles = {
        high: "bg-[#feecec] text-red-600",
        medium: "bg-[#FFF6D1] text-[#F59E0B]",
        low: "bg-[#EEEFF2] text-[#9CA3AF]"
};
    issue.forEach((issue) => {
    const priority = issue.priority.toLowerCase();
    const activeStyle = priorityStyles[priority]
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
        <div class="card border-t-3 ${issue.status === 'open' ? 'border-[#00A96E]' : 'border-[#A855F7]'} p-4 shadow-sm space-y-3 h-full">
            <div class="flex justify-between mb-3">
              <img src="${issue.status === "open" ? "./assets/Open-Status.png" : "./assets/Closed-Status.png"}" alt="">
              <div class="rounded-full ${activeStyle}">
                <span class="p-3">${priority.toUpperCase()}</span>
              </div>
            </div>
            <div class="space-y-2">
              <h2 class="font-semibold text-sm">${issue.title}</h2>
              <p class="font-normal text-xs text-[#64748b] line-clamp-2">${issue.description}</p>
            </div>
            <div class="flex gap-1">
              ${labelsHandler(issue.labels)}
            </div>
            <hr class="text-gray-400">
            <div class="space-y-2">
              <p class="font-normal text-xs text-[#64748b]">#${issue.id}by ${issue.author}</p>
              <p class="font-normal text-xs text-[#64748b]">${new Date(issue.createdAt).toLocaleDateString('en-US')}</p>
            </div>
          </div>
        `;
    allCardSection.appendChild(cardDiv);
  });
};
