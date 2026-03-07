const btnAll = document.getElementById('btn-all')
const btnOpen = document.getElementById('btn-open')
const btnClosed = document.getElementById('btn-closed')

// button toggle stye
function toggleStyle(id) {
    [btnAll, btnOpen, btnClosed].forEach(btn => {
        btn.classList.remove('btn-primary')
        btn.classList.add('btn-soft')
    })

    const currentBtn = document.getElementById(id)

    currentBtn.classList.remove("btn-soft")
    currentBtn.classList.add("btn-primary")

}
