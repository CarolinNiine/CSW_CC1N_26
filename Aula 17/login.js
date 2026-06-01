function logar(){
    let login = document.getElementById('Login').value;
    let senha = document.getElementById('pass').value;

    if (login === "tutor" && senha === "123456"){
        window.open("tutor.html", "_blank")
    }

    else if (login === "ong" && senha === "ong$-135"){
        window.open("ong.html", "_blank")
    }

    else{
        alert("Usuário ou senha inválido !!")
        return
    }
}