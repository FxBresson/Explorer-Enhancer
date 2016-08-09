function copypaste(path1, path2) { //copie le contenu d'un fichier path1 et le colle dans un nouveau fichier path2

    fs.createReadStream('path1').pipe(fs.createWriteStream('path2'));

}

function readdir(path){
    list=document.getElementById("list");
    fs.readdir(path, function(err, items) {
    console.log(items);

    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
        list.innerHTML+=items[i]+", ";
    }
    
});
}