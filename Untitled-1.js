let box=document.querySelector('.continer');
let arrow=document.querySelector('.arrownext');
let arrowp=document.querySelector('.prevent');
let img=document.querySelector('.image');
let image11=document.querySelector('.image11');
let image2=document.querySelector('.image2');
let image3=document.querySelector('.image3');
let image4=document.querySelector('.image4');
imgsrc=img.getAttribute('src')
imgsrc11=image11.getAttribute('src')
imgsrc2=image2.getAttribute('src')
imgsrc3=image3.getAttribute('src')
imgsrc4=image4.getAttribute('src')


index=1;
function next(index){
    let continerbox=['mangatt2.jpg','manga7777t.jpg','manga2t.jpg','manga1 t(2).jpg','mangat.jpg','manga777t.jpg','mangatt.jpg']
    let classbox=[ 'image11' ,'image2' ,'image', 'image3','image4',]

    continerbox.unshift(continerbox[continerbox.length-1])
    continerbox.pop(continerbox[continerbox[continerbox-1]])
classbox.unshift(classbox[classbox.length-1])
classbox.pop(classbox[classbox.length-1])
  /////cycle 
imgsrc11=continerbox[index];
 image11.className=''
image11.className=classbox[index-1]
index++
imgsrc2=continerbox[index]
image2.className=''
image2.className=classbox[index-1]
index++
imgsrc=continerbox[index]
img.className=''
img.className=classbox[index-1]
index++
imgsrc3=continerbox[index]
image3.className=''
image3.className=classbox[index-1]
index++
imgsrc4=continerbox[index]
image4.className=''
image4.className=classbox[index-1]
 
console.log(classbox)

    
}
console.log(imgsrc)
arrow.addEventListener('click', next)

