

// let theme = getComputedStyle(document.body).backgroundColor;
let root = document.querySelector(":root");
let theme = localStorage.getItem('theme');

if (theme == 'null') {
    theme = 'light';
}

if (theme == 'dark') {
    root.style.setProperty('--color0', '#010101');
    root.style.setProperty('--color1', 'white');
    root.style.setProperty('--color3', 'rgb(45, 45, 45)');
    document.getElementById('theme-icon').setAttribute('src', 'styles/imgs/light.png')
    theme = 'dark';
} else if (theme == 'light') {
    root.style.setProperty('--color0', 'white');
    root.style.setProperty('--color1', '#010101');
    root.style.setProperty('--color3', 'rgb(197, 197, 197)');
    document.getElementById('theme-icon').setAttribute('src', 'styles/imgs/dark.png')
    theme = 'light';
}


localStorage.setItem("theme", theme);

function thememode() {
    // let theme = getComputedStyle(document.body).backgroundColor;
    let theme = localStorage.getItem('theme');
    if (theme == 'null') {
        theme = 'light';
    }

    if (theme == 'light') {
        root.style.setProperty('--color0', '#010101');
        root.style.setProperty('--color1', 'white');
        root.style.setProperty('--color3', 'rgb(45, 45, 45)');
        document.getElementById('theme-icon').setAttribute('src', 'styles/imgs/light.png')
        theme = 'dark';
    } else if (theme == 'dark') {
        root.style.setProperty('--color0', 'white');
        root.style.setProperty('--color1', '#010101');
        root.style.setProperty('--color3', 'rgb(197, 197, 197)');
        document.getElementById('theme-icon').setAttribute('src', 'styles/imgs/dark.png')
        theme = 'light';
    }
    
    localStorage.setItem("theme", theme);
    console.log(theme);
}




function blog(b) {
    
    let breadcrumb = document.getElementById('breadcrumb');
    let currentbc = document.getElementById('currentbc');
    let title = document.getElementById('title');
    let blog1 = document.getElementById('laws');
    let blog2 = document.getElementById('adopting-dogs');
    let blogslist = document.getElementById('blogs-list');

    
    breadcrumb.style.display = 'block';
    blogslist.style.display = 'none';

    if (b == 1) {
        blog1.style.display = 'flex';
        blog2.style.display = 'none';
        currentbc.innerHTML = "Laws";
        title.innerHTML = "Laws";
    }
    else if (b == 2) {
        blog1.style.display = 'none';
        blog2.style.display = 'flex';
        currentbc.innerHTML = "Adopting Dogs";
        title.innerHTML = "Adopting Dogs";
    }
}