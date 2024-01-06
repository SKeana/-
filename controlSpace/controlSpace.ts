type spaceContorl = {
    [key: string]: string;
  };

const spaceContorl: spaceContorl = {
    left: 'Sinistra',
    right: 'destro (masculine) or destra (feminine)',
    above: 'Sopra',
    below: 'sotto',
    beside: 'accanto',
    front: 'davanti',
    behind: 'dietro',
    top: 'superiore',
    bottom: 'metter il fondo a'
};
function displatSpaceControl(){
    const translationsUl = document.getElementById('translation');
    if (translationsUl) {
        translationsUl.innerHTML = '';
        for (const key in spaceContorl) {
            const listItem = document.createElement('li');
            listItem.textContent = '${key}: ${spaceControl[key]}';
            translationsUl.appendChild(listItem);
        }
    }
}
document.addEventListener('DOMContentLoadded', displatSpaceControl);