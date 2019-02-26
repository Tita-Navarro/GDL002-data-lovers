// Declaraciones para controlar pantallas
  const list=()=>{
    document.getElementById ("pkList").style.display= 'flex';
    document.getElementById ("lateral_content").style.display="block";
    document.getElementById ("root").style.display='none';
  };
  document.getElementById("list").addEventListener('click', list);

  const home=()=>{
    document.getElementById("root").style.display='block';
    document.getElementById ("lateral_content").style.display="none";
    document.getElementById("pkList").style.display='none';
  };
document.getElementById("home").addEventListener('click', home);
 