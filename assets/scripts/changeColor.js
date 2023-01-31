function changeColor(t) {
    const links = document.querySelectorAll('.nav-link')
    const navIndex = document.getElementById('myNav')
    links.forEach(link => {
      link.style.color = 'white';
      if (navIndex) {
        navIndex.style.height = "0%";
      }
    })
    setTimeout(() => {t.style.color = 'orange'}, 5)
}
