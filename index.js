const body = prompt('Write background page color: red, green ...', '#e0e0e0');
document.body.style.background = body;

const font = prompt('Write typeface: serif, sans-serif...', 'Helvetica');
document.body.style.fontFamily = font;


let headline = document.getElementsByClassName('headline');
const title = prompt('Align title', 'center');
headline[0].style.textAlign = title;
headline[0].style.color = '#8800ff';


let links = document.getElementById('links');
const linksBG = prompt('Write paragraph background color: red, green ...', '#00e8b2');
links.style.background = linksBG;

const colorLinks = prompt('Write paragraph color: red, green ...', '#ffffff');
links.style.color = colorLinks;
links.style.textAlign = 'center';
links.style.width = '800px';
links.style.height = '30px';
links.style.margin = 'auto';
links.style.paddingTop = '15px';


const colorA = prompt('Write links color: red, green ...', '#8800ff');
let aTeg = document.getElementsByTagName('a');
for (let i = 0; i < aTeg.length; i++) {
    aTeg[i].style.color = colorA;
}

const divBG = prompt('Write color info: red, green ...', '#ffffff');
let info = document.getElementById('info');
info.style.background = divBG;
info.style.width = '800px';
info.style.height = '500px';
info.style.margin = 'auto';
info.style.paddingTop = '30px';

const fetText = prompt('Write fat text: 100, 300 ...,', '700');
info.style.fontWeight = fetText;
info.style.color = '#808080';
info.style.fontSize = '15px';
info.style.lineHeight = '25px';


let uiColor = document.getElementsByClassName('ui');
const ui = prompt('Write ui color: red, green ...,', '#8800ff');
uiColor[0].style.color = ui;
uiColor[0].style.width = '450px';
uiColor[0].style.margin = 'auto';
uiColor[0].style.padding = '30px';

let textStyle = document.getElementsByClassName('text');
textStyle[0].style.width = '700px';
textStyle[0].style.margin = 'auto';
textStyle[1].style.width = '700px';
textStyle[1].style.margin = 'auto';
textStyle[1].style.fontSize = '13px';
textStyle[1].style.paddingTop = '20px';


const liChang = prompt('Write style for li: disc|circle|square ', 'square');
let liTag = document.getElementsByTagName('li');
for (let i = 0; i < liTag.length; i++) {
    liTag[i].style.listStyleType = liChang;
}


let link1 = document.getElementById('link1');
const linkType1 = prompt('Write your favorite web-page', 'football24.ua');
link1.textContent = `${linkType1}`;
link1.href = `https://${linkType1}`;