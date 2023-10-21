let icons = document.querySelectorAll('.icon');

icons.forEach((icon,index) => {
    icon.addEventListener('click', function () {
        let iconElement = icon.querySelector('i');
        if (iconElement) {
            icon.innerHTML = `<h5 class="coppied${index}">coppied</h5>`;
        }

        let textToCopy = icon.nextElementSibling.innerText.trim();
        navigator.clipboard.writeText(textToCopy)
        })
    });


