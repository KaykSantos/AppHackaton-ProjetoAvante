function capturaFrenteCPF(){
    navigator.camera.getPicture(onSucess1, onFail1,{
        quality:100,
        destinationType:Camera.DestinationType.FILE_URI,
        saveToPhotoAlbum:true,
        sourceType:Camera.PictureSourceType.CAMERA,
        mediaType:Camera.MediaType.PICTURE,
        encodingType:Camera.EncodingType.JPEG
    })
}
function onSucess1(){
    alert("Imagem salva e enviada");
    
}
function onFail1(){
    alert("Erro ao capturar a imagem");
}
function capturaVersoCPF(){
    navigator.camera.getPicture(onSucess2, onFail2,{
        quality:100,
        destinationType:Camera.DestinationType.FILE_URI,
        saveToPhotoAlbum:true,
        sourceType:Camera.PictureSourceType.CAMERA,
        mediaType:Camera.MediaType.PICTURE,
        encodingType:Camera.EncodingType.JPEG
    })
}
function onSucess2(){
    alert("Imagem salva e enviada");
    
}
function onFail2(){
    alert("Erro ao capturar a imagem");
}

function capturaFrenteRG(){
    navigator.camera.getPicture(onSucess3, onFail3,{
        quality:100,
        destinationType:Camera.DestinationType.FILE_URI,
        saveToPhotoAlbum:true,
        sourceType:Camera.PictureSourceType.CAMERA,
        mediaType:Camera.MediaType.PICTURE,
        encodingType:Camera.EncodingType.JPEG
    })
}
function onSucess3(){
    alert("Imagem salva e enviada");
    
}
function onFail3(){
    alert("Erro ao capturar a imagem");
}
function capturaVersoRG(){
    navigator.camera.getPicture(onSucess4, onFail4,{
        quality:100,
        destinationType:Camera.DestinationType.FILE_URI,
        saveToPhotoAlbum:true,
        sourceType:Camera.PictureSourceType.CAMERA,
        mediaType:Camera.MediaType.PICTURE,
        encodingType:Camera.EncodingType.JPEG
    })
}
function onSucess4(){
    alert("Imagem salva e enviada");
    
}
function onFail4(){
    alert("Erro ao capturar a imagem");
}

function capturaBoletim(){
    navigator.camera.getPicture(onSucess5, onFail5,{
        quality:100,
        destinationType:Camera.DestinationType.FILE_URI,
        saveToPhotoAlbum:true,
        sourceType:Camera.PictureSourceType.CAMERA,
        mediaType:Camera.MediaType.PICTURE,
        encodingType:Camera.EncodingType.JPEG
    })
}
function onSucess5(){
    alert("Imagem salva e enviada");
    
}
function onFail5(){
    alert("Erro ao capturar a imagem");
}