console.log('Hello node!')
/*
0 Obter um usuario
1 Obter o número de telefone de um usuário pelo ID
2 Obter endereço pelo ID
*/

function obterUsuario(callback){
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      dt: new Date()
    })
  }, 1000)
}

function obterTelefone(idUsuario, callback){
  setTimeout(function() {
    return callback(null, {
      telefone: '62992665',
      ddd: 64,      
    })
  }, 2000)
}

function obterEndereco(idUsuario, callback){
  setTimeout(function() {
    return callback(null, {
      rua: 'Rua 3',
      n: 14,      
    })
  }, 4000)
}

function resolverUsuario(erro, usuario) {
}

obterUsuario(function resolverUsuario(error, usuario){
  if(error){ 
    console.error('Erro ao obter usuario', error)
    return;
  }
  console.log('usuario', usuario)

  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if(error1){
      console.error('Erro ao obter telefone', error1)         
    }
    console.log('telefone', telefone)
  })
  obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
    if(error2){
      console.error('Erro ao obter endereco', error2)         
    }
    console.log('endereco', endereco)
  })
})
