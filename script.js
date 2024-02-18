let newImg, showImg;

function loadImg(event){
  showImg=document.getElementById('showImg')
  showImg.src=URL.createObjectURL(event.target.files[0]);

  newImg=document.createElement('img')
  newImg.src=URL.createObjectURL(event.target.files[0]);


  showImg.onload=function(){
    URL.revokeObjectURL(showImg.src);
  }
}

function pdfDown(){


  const doc = new jsPDF();

  doc.addImage(newImg, 15, 40, 180, 180);

  doc.save('imgintoPdf.pdf');
   
  
}
