function copypaste(src, dest) { //copie le contenu d'un fichier path1 et le colle dans un nouveau fichier path2

    fs.createReadStream(src).pipe(fs.createWriteStream(dest));

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