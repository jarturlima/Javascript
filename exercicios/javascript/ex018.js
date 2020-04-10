function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
           gênero = 'Homem'
           if(idade >= 0 && idade < 10) {
            // Cirança
            img.setAttribute('src', 'fotobebemenino.png')
           } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'fotojovemhomem.png')
           } else if (idade < 50) {
               // Adulto
               img.setAttribute('src', 'fotoadultohomem.png')
           } else {
               // Idoso
               img.setAttribute('src', 'fotosenhorhomem.png')
           }
       } else if (fsex[1].checked) {
           gênero = 'Mulher'
           if(idade >= 0 && idade < 10) {
            // Cirança
            img.setAttribute('src', 'fotobebemenina.png')
           } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'fotojovemmulher.png')
           } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'fotoadultamulher.png')
           } else {
            // Idoso
            img.setAttribute('src', 'fotosenhoramulher.png')
           }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }

}