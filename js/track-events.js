const sT = document.getElementById('sidebarToggle')

sT.addEventListener('click', event => {
    pendo.track('Sidebar Toggle', {
        type: event.type
    })
    console.log(event)
})
