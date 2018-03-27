//Open pdf

function downloadFile(src){
    var link=document.createElement('a');
    document.body.appendChild(link);
    link.href= src;
    link.download = '';
    link.click();
}