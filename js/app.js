function onMenu () {
    let menuEl = document.querySelector(".btn-menu")
    let closeEl = document.querySelector(".btn-close")
    
    let navEl = document.querySelector(".nav-list")

    menuEl.addEventListener("click", handleOpenMenu)
    closeEl.addEventListener("click", handleCloseMenu)

    function handleOpenMenu () {
        navEl.classList.add("active")
    }
    function handleCloseMenu () {
        navEl.classList.remove("active")
    }
}

onMenu();