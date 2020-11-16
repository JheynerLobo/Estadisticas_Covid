async function leerJSON(url) {

  try {
    let response = await fetch(url);
    let user = await response.json();
    return user;
  } catch(err) {
    
    alert(err);
  }
}

function leerSexo(datos){
  var sexo=new Array();
  var msg="";

  for(let i=0;i<datos.length;i++){
    sexo[i]=datos[i].sexo;
    }
return sexo;
}

function leerContagios(datos){
  var cont=new Array();
  var msg="";
  var a=0;

  for(let i=0;i<datos.length;i++){
    cont[i]=datos[i].fuente_tipo_contagio;
  
}
return cont;
}

function leerlugar(datos,doc){
var depar=new Array();
var cont=0;
var depart=new Array();
var d=new Array();
for(let i=0;i<datos.length;i++){
  if(doc==0){
    if(!depar.includes(datos[i].departamento_nom)){
    depar[cont]=datos[i].departamento_nom;
    depart[cont]=datos[i].departamento;
    cont++;
    }
  }else{
    if(!depar.includes(datos[i].ciudad_municipio_nom)){
    depar[cont]=datos[i].ciudad_municipio_nom;
    depart[cont]=datos[i].ciudad_municipio;
    
    cont++;
    }
  }
  d[0]=depar;
    d[1]=depart;
  
}return d;
}

function leerSeleccionado(id){
  var msg="";
    var l=document.getElementById(id);
    var indiceSeleccionado =l.selectedIndex;
    var opcionSeleccionada = l.options[indiceSeleccionado];


    msg = opcionSeleccionada.value;
  
  return msg;

}

function mostrarIndex()
{
var url="https://martinmedinaruvian.github.io/json/covid19ColombiaMarzo.json";



leerJSON(url).then(datos=>{

var departamentos=leerlugar(datos,0);
document.getElementById("departamentos").innerHTML=mostrarDepartamentos(departamentos,0);
document.getElementById("departamentos2").innerHTML=mostrarDepartamentos(departamentos,1);

});

}

function mostrarDepartamentos(departamentos,nid)
{  
  var msg="<select class='custom-select'";
  if(nid==1){
  msg+="onclick='mostrarMunicipios()'";
  }
  msg+="id='depart"+nid+"'>";
msg+="<option value='ninguno'>Elija Departamento</option>";
for (let i=0; i<departamentos[0].length; i++) {
  msg+="<option value='"+departamentos[1][i]+"'>"+departamentos[0][i]+"</option>";
}

msg+="</select>";

  return msg;

}

function mostrarMunicipios(){
  var msg="<select class='custom-select ml-3' onclick='' id='munic'>";
  msg+="<option>Elija Municipio</option>";
var url="https://martinmedinaruvian.github.io/json/covid19ColombiaMarzo.json";
var municipios="";
var m="";
leerJSON(url).then(datos=>{
municipios=leerlugar(datos,1);
var id=leerSeleccionado("depart1");
m=filtrarMunicipios(municipios,id);
msg+=mostrarMunicipios2(m);
msg+="</select>";
    

  document.getElementById("municipios").innerHTML=msg;
});



}

function mostrarMunicipios2(m){
  let msg="";
  for(let i=0; i<m[0].length;i++){
    msg+="<option value='"+m[1][i]+"'>"+m[0][i]+"</option>";
  }
  return msg;

}

function filtrarMunicipios(municipios,id){
   var mn=new Array();
   var mn1=new Array();
   var mn2=new Array();
   var cont=0;
   for(let i=0; i<municipios[0].length;i++){
      if(compararid(municipios[1][i],id)){
      mn1[cont]=municipios[0][i];
      mn2[cont]=municipios[1][i];
      cont++;
    }
   }
   mn[0]=mn1;
   mn[1]=mn2;
   return mn;
}

function compararid(id1,id2){
  if(id1==id2){return true}
    if(id2.length==1&&id1.length==4){
      if(id1[0]==id2[0])return true;
    }
    //es un if para un caso especial en el que el Json trae cartagena como departamento,
    // y cartagena tiene 13 al iniciar su id y 13 es el departamento de bolivar 
    if(id2.length==2&&id1==13001){return false;}
    if(id2.length==2&&id1.length==5){
      if(id1[0]==id2[0]&&id1[1]==id2[1])return true;
    }


  return false;
}

function irDepartamento(){
  var url='html/ref1.html?departamento=';
  var msg=leerSeleccionado('depart0');

  if(msg=='ninguno'){
  alert("No ha seleccionado departamento");
  }else{
    url+=msg;
  location.href=url;
}
}

function irMunicipio(){
  var url='html/ref2.html?municipio='+leerSeleccionado('munic');
  location.href=url;
}

function irNacionales(){
  var url='html/ref3.html';
  
  location.href=url;
}

function leerUrl(tipo){
const urlParams = new URLSearchParams(window.location.search);
if(tipo==0){var m = urlParams.get('departamento');}
else{var m = urlParams.get('municipio');}
return m;
}

function mostrarDepart(){
var url="https://martinmedinaruvian.github.io/json/covid19ColombiaMarzo.json";


leerJSON(url).then(datos=>{
var m=leerUrl(0);
var datosDepart=filtrarCasos(datos,m,0);
document.getElementById("title").innerHTML=nombreDoM(datosDepart,0);
tableDepart(estadisticasPorSexo(datosDepart));
});
}

function mostrarMun(){
var url="https://martinmedinaruvian.github.io/json/covid19ColombiaMarzo.json";


leerJSON(url).then(datos=>{
var m=leerUrl(1);
var datosMun=filtrarCasos(datos,m,1);
document.getElementById("title").innerHTML=nombreDoM(datosMun,1);
tableMun(estadisticasFuenteContagio(datosMun));
})
}

function nombreDoM(datos,m){
  if(m==0)
  var msg="<h3>"+datos[0].departamento_nom+"</h3>";
  if(m==1)
  var msg="<h3>"+datos[0].ciudad_municipio_nom+"</h3>";
  return msg;
}

function tableDepart(datos){
  var data = new google.visualization.DataTable();
  //Encabezados de las tablas:
  crearEncabezados(data, 'Sexo', 'Frecuencia');
  //crearEncabezados2(data2);
  //Crear las filas:
  data.addRows(datos.length);
  //data2.addRows(2);
  for(let i=0;i<datos.length;i++)
  {
    //Filas y columnas setCell(indicefila, indiceColumna, dato)
    if(i==0){data.setCell(i,0,'Mujeres');}
    else{data.setCell(i,0,'Hombres');}
    data.setCell(i,1,datos[i]);

  }

  var table = new google.visualization.Table(document.getElementById('tabla'));
    table.draw(data, {showRowNumber: true, width: '50%', height: '100%'});

   var opciones= {'title':'Estadisticas Nacionales', 'colors':['#b544fa','#0040a1'],
                  'width':1230,
                  'height':800};
   var grafica=new google.visualization.PieChart(document.getElementById('grafica'));
   grafica.draw(data,opciones);
}

function tableMun(datos){
  var data = new google.visualization.DataTable();
  //Encabezados de las tablas:
  crearEncabezados(data, 'Fuente de Contagio', 'Frecuencia');
  //crearEncabezados2(data2);
  //Crear las filas:
  data.addRows(datos.length);
  //data2.addRows(2);
  for(let i=0;i<datos.length;i++)
  {
    //Filas y columnas setCell(indicefila, indiceColumna, dato)
    if(i==0){data.setCell(i,0,'Relacionado');}
    else{data.setCell(i,0,'Importado');}
    data.setCell(i,1,datos[i]);
  }
  var table = new google.visualization.Table(document.getElementById('tabla'));
    table.draw(data, {showRowNumber: true, width: '50%', height: '100%'});

   var opciones= {'title':'Estadisticas Nacionales', 'colors':['#b544fa','#0040a1'],
                  'width':1230,
                  'height':800};
   var grafica=new google.visualization.PieChart(document.getElementById('grafica'));
   grafica.draw(data,opciones);
}

function tablaNacional(departamentos)
{
  var data = new google.visualization.DataTable();
  var data2 = new google.visualization.DataTable();
  //Encabezados de las tablas:
  crearEncabezados(data, 'Departamento', 'Frecuencia');
  //crearEncabezados2(data2);
  //Crear las filas:
  data.addRows(departamentos[0].length);
  //data2.addRows(2);
  for(let i=0;i<departamentos[0].length;i++)
  {
    //Filas y columnas setCell(indicefila, indiceColumna, dato)
    data.setCell(i,0,departamentos[0][i]);
    data.setCell(i,1,departamentos[1][i]);

  }

  var table = new google.visualization.Table(document.getElementById('tabla'));
    table.draw(data, {showRowNumber: true, width: '50%', height: '100%'});

   var opciones= {'title':'Estadisticas Nacionales',
                  'width':1230,
                  'height':800};
   var grafica=new google.visualization.BarChart(document.getElementById('grafica'));
   grafica.draw(data,opciones);
}

function crearEncabezados(data,col1,col2)
{
data.addColumn('string', col1); //0
data.addColumn('number', col2); //1

}

function filtrarCasos(datos,id,n){
var datosDoM=new Array();
var cont=0;
for(let i=0;i<datos.length;i++){
   if(n==0){
   if(compararid(datos[i].departamento,id)){
      datosDoM[cont]=datos[i];
      cont++;
      } 
   }
   if(n==1){
   if(compararid(datos[i].ciudad_municipio,id)){
      datosDoM[cont]=datos[i];
      cont++;
      }
   }
}
return datosDoM;

}

function estadisticasPorSexo(datos){

  var sexo=leerSexo(datos);
  var frecuencias=new Array(2);
  frecuencias[0]=0;
  frecuencias[1]=0;
  for (let i = 0; i<sexo.length; i++) {
    if(sexo[i]=='F'){
      frecuencias[0]+=1;
    }
    if(sexo[i]=='m' || sexo[i]=='M'){
      frecuencias[1]+=1;
    }
  }
  return frecuencias;
}




function estadisticasFuenteContagio(datos){

  var fuentes=leerContagios(datos);
  var frecuencias=new Array(2);
  frecuencias[0]=0;
  frecuencias[1]=0;
  for (let i = 0; i<fuentes.length; i++) {
    if(fuentes[i]=='Relacionado'){
      frecuencias[0]+=1;
    }
    if(fuentes[i]=='Importado'){
      frecuencias[1]+=1;
    }
  }console.log(frecuencias);
  return frecuencias;
}


function mostrarNacionales(){
  var url="https://martinmedinaruvian.github.io/json/covid19ColombiaMarzo.json";

leerJSON(url).then(datos=>{

tablaNacional(estadisticasNacionales(datos));
});
}

function estadisticasNacionales(datos){

  var departamentos=leerlugar(datos,0)[0]; 
  var frecuencia=new Array(departamentos.length);  
  var nacionales=new Array();  

for(var i = 0; i < datos.length; i++){  
  for(var j = 0; j < departamentos.length; j++){

    if(departamentos[j]==datos[i].departamento_nom){
      if(frecuencia[j]==null){
        frecuencia[j]=1;
      }
      else{
      frecuencia[j]+=1;} 
    }
  }
}

  nacionales[0]=departamentos;
  nacionales[1]=frecuencia;
return nacionales;
}
