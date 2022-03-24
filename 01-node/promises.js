console.log('Hello node!')
/*
0 Obter um usuario
1 Obter o número de telefone de um usuário pelo ID
2 Obter endereço pelo ID
*/

function obterUsuario(){
  return new Promise(function resolvePromise(resolve, reject) {
    //return reject(new Error('Deu erro '))
    setTimeout(function() {
      return resolve({
        id: 1,
        nome: 'Aladin',
        dt: new Date()
        
      })
    }, 1000)
  })  
}

function obterTelefone(idUsuario){
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        telefone: '62992665',
        ddd: 64,      
      })
    }, 2000)
  })  
}

function obterEndereco(idUsuario, callback){
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        rua: 'Rua 3',
        n: 14,      
      })
    }, 4000)
  })  
}



const usuarioPromise = obterUsuario();


usuarioPromise
  .then(function (resultado) {
    return obterTelefone(resultado.id)
      .then(function resolverTelefone(result) {
        return {
          usuario: {
            nome: resultado.nome,
            id: resultado.id
          },
          telefone: result
        }
      })
  })
  .then(function (resultado) {
    console.table(resultado)
    //return obterTelefone(resultado.id)
  })
  .catch(function (error){
    console.error('Erro ao buscar usuario', error)
  })


/*obterUsuario(function resolverUsuario(error, usuario){
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
})*/
