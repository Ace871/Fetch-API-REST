window.onload = function(){
  const cadastrar = document.querySelector("#cadastrar");
  const nome = document.querySelector("#nome");
  const curso = document.querySelector("#curso");
  const buscar = document.querySelector("#buscar");
  const id = document.querySelector("#id");
  const alterar = document.querySelector("#alterar");
  const deletar = document.querySelector("#deletar");

  // Ação de Cadastro de Pessoa e Curso

  cadastrar.addEventListener("click", function(){
    let formdata = new Formdata();
    formdata.append('nome',`${nome.value}`);
    formdata.append('curso',`${curso.value}`);

    fetch("https://www.jussimarleal.com.br/exemplo_api/pessoa",
    {
      body: formdata,
      method:"post",
      mode:'cors',
      cache:'default'
    }).then(()=>{
      alert("Registro Efetuado com Sucesso");
      LimparCampos();
    });
  });

  //Listar Cadastros

  buscar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`),{
    method:"get",
    mode:'cors',
    cache:'default'
    }).then(response=>{
      response.json().then(data => {
        nome.value = data['nome'];
        curso.value = data['curso'];
      })
    })
  })

  //Alterar Cadastros

  alterar.addEventListener("click", function(){
    fetch(`https://www.jussimarleal.com.br/exemplo_api/pessoa/${id.value}`),{
    method:"put",
    mode:'cors',
    cache:'default',
    headers:{
      'content-type':'application/json; charset=UTF-8'
    },
    body:JSON.stringify({
      'nome':`${nome.value}`,
      'curso':`${curso.value}`
    })
  }).then(()=>{
    alert("Registro Alterado com Sucesso")
    LimparCampos();
    });
  });

  //Deletar Registros

  deletar.addEventListener("click", function(){
    fetch("https://www.jussimarleal.com.br/exemplo_api/pessoa",
    {
      body: formdata,
      method:"delete",
      mode:'cors',
      cache:'default'
    }).then(()=>{
        alert("Registro Deletado com Sucesso!");
        LimparCampos();
    });
  })

  //Limpar Campos

  function LimparCampos(){
    nome.value = "";
    curso.value = "";
  };
}