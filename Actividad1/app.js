// Estructura de la aplcación

//  funcion para cargar el data.js
async function getData(){
    fetch('data.json')
       .then(response => response.json())
       .then(data => {
        // imprime los datos en consola
            console.log(data)
        })
       .catch(error => console.error('Error:', error));
}
// funcion para eliminar comentarios
function deleteComments(element){
    const nodes = element.childNodes;
    for(let i = nodes.length - 1; i >= 0; i--){
        const node = nodes[i];
        if (node.nodeType === Node.COMMENT_NODE) {
            element.removeChild(node);
        }
        // si encuentra un elemento que no es comentario vuelve a llamar la función para aplicar en sus nodos hijos
        else if (node.nodeType === Node.ELEMENT_NODE) {
            deleteComments(node);
        }
    }
    // código para eliminar comentarios
    console.log('Comentarios eliminados');
}

function printDocument(data){
    const obj = JSON.parse(data);
    document.getElementById('view-container').innerHTML=obj.name;
    console.log('Documento impreso');
}
// datos en consola
getData();
deleteComments(document);


