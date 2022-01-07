const persons =[
    {
        name: "pedro",
        sex: "M"
    },
    {
        name: "Monica",
        sex: "F"
    },
    {
        name: "Camilo",
        sex: "M"
    },
    {
        name: "Carlos",
        sex: "M"
    },
    {
        name: "Juanita",
        sex: "F"
    },
];

const validarSex = () =>{
    const listar = persons.map(
        function(objeto){
            //objeto.sex=="M") ? El se llama ${objeto.name} : Ella se llama ${objeto.name};
            if(objeto.sex=="M"){
                console.log(`El se llama ${objeto.name}`)
            }else{
                console.log(`Ella se llama ${objeto.name}`)
            }
        }
    );
}

validarSex();