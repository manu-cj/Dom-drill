let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

let double = []

for (let i = 0; i < ul.childNodes.length; i++) {
    let element = ul.childNodes[i];

    if (element.nodeType === 1) {
        element.addEventListener('click', function() {
            if (element.textContent === 'Fast and Furious') {
                alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
            } else {
                alert(element.textContent);
            }
        });
        if (double.includes(element.textContent)) {
            ul.removeChild(element);
        } else {
            double.push(element.textContent);
            if (element.textContent.includes('Fast and Furious')) {
                if (i !== 0) {
                    ul.insertBefore(element, ul.firstChild);
                    element.classList.add('important');
                }
            }
        }
    }
}