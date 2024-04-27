let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

console.log(ul.childNodes);

for (let i = 0; i < ul.childNodes.length; i++) {
    element = ul.childNodes[i]
   
    if (element.nodeType === 1) {
        if (element.textContent.includes('Fast and Furious')) {
            console.log('hey');
            if (i !== 0) {
                ul.insertBefore(element, ul.firstChild);
            }
            break;
        }
        
    }

}