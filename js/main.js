function displayGrads()
{
    let numStudents = 21;
    let mainContainer = document.getElementById("main-container");
    let studentWrapper; 
    let infoWrapper;
    let poster;
    let name;
    let expertiseWrapper;
    let expertise1;
    let expertise2;
    let expertise3;
    let bio;
    let text;
    let link;
    let bullet;
    let bullet2;

    for (let i = 0; i < numStudents; i++)
    {
        studentWrapper = document.createElement("div");
        studentWrapper.setAttribute("id", "grad-info-" + i);
        studentWrapper.setAttribute("class", "grad-info grad-info-collapsed");
        studentWrapper.setAttribute("onmouseenter", "expandGrad(" + i + ")");
        studentWrapper.setAttribute("onmouseleave", "collapseGrad(" + i + ")");

        poster = document.createElement("img");
        poster.src = "img/posters/" + i + ".jpg";
        studentWrapper.appendChild(poster);
        
        infoWrapper = document.createElement("div");
        infoWrapper.setAttribute("class", "grad-bio");
        name = document.createElement("h2");
        name.setAttribute("class", "red");
        text = document.createTextNode("Lorem Ipsum");
        name.appendChild(text);
        let hr = document.createElement("hr");
        hr.setAttribute("class", "red");

        bullet = document.createTextNode("\u25CB");
        bullet2 = document.createTextNode("\u25CB");
        expertiseWrapper = document.createElement("span");
        expertiseWrapper.setAttribute("class", "expertise-wrapper");
        expertise1 = document.createElement("h5");
        text = document.createTextNode("Dolor");
        expertise1.appendChild(text);
        expertise2 = document.createElement("h5");
        text = document.createTextNode("Sit");
        expertise2.appendChild(text);
        expertise3 = document.createElement("h5");
        text = document.createTextNode("Amet");
        expertise3.appendChild(text);
        expertiseWrapper.appendChild(expertise1);
        expertiseWrapper.appendChild(bullet);
        expertiseWrapper.appendChild(expertise2);
        expertiseWrapper.appendChild(bullet2);
        expertiseWrapper.appendChild(expertise3);

        bio = document.createElement("p");
        text = document.createTextNode("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.");
        bio.appendChild(text);
        bio.appendChild(document.createElement("br"));
        bio.appendChild(document.createElement("br"));
        text = document.createTextNode("Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.");
        bio.appendChild(text);

        link = document.createElement("a");
        text = document.createTextNode("view portfolio");
        link.appendChild(text);
        link.setAttribute("class", "right text-link");

        infoWrapper.appendChild(name);
        infoWrapper.appendChild(hr);
        infoWrapper.appendChild(expertiseWrapper);
        infoWrapper.appendChild(bio);
        infoWrapper.appendChild(link);
        studentWrapper.appendChild(infoWrapper);
        mainContainer.appendChild(studentWrapper);

        fadeIn();
    }
}

function fadeIn(time)
{
    setTimeout(function() {
        document.getElementsByTagName("body")[0].setAttribute("class", "fade-in");
    }, 200);
}

function expandGrad(grad)
{
    let expanded = document.getElementsByClassName("grad-info-expanded");
    if (expanded[0] != undefined)
    {
        expanded[0].setAttribute("class", "grad-info grad-info-collapsed");
    }
    document.getElementById("grad-info-" + grad).setAttribute("class", "grad-info grad-info-expanded");
    window.location = "#grad-info-" + grad;
}

function collapseGrad(grad)
{   
    document.getElementById("grad-info-" + grad).setAttribute("class", "grad-info grad-info-collapsed");
}

function toPage(page)
{
    document.getElementsByTagName("body")[0].setAttribute("class", "slide-up");

    setTimeout(function() {
        window.location = page + ".html";
    }, 1200);
}