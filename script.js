const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
});

userName.addEventListener("blur", ()=> {
    checkInputUserName();
});

email.addEventListener("blur", ()=> {
    checkInputEmail();
});

password.addEventListener("blur", ()=> {
    checkInputPassword();
});

passwordConfirmation.addEventListener("blur", ()=> {
    checkInputPasswordConfirmation();
});

function checkInputUserName() {
    const userNameValue = userName.value;

    if(userNameValue === "") {
        errorInput(userName, "Preencha o nome de usuario!")
    }else {
        const formItem = userName.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if(emailValue === "") {
        errorInput(email, "O e-mail é obrigatorio!");
    }else {
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputPassword() {
    const passwordValue = password.value;

    if(passwordValue === "") {
        errorInput(password, "A senha é obrigatoria!");
    }else if (passwordValue.length < 8) {
        errorInput(password, "A senha precisa ter no minimo 8 caracteres.");
    }else {
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value; 

    if(confirmationPasswordValue === "") {
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória!")
    }else if (confirmationPasswordValue != passwordValue) {
        errorInput(passwordConfirmation, "As senhas não são iguais!")
    }else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content";
    }
}


function checkForm() {
    checkInputUserName();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every( (item)=> {
        return item.className === "form-content";
    });

    if(isValid) {
        alert("Cadastrado com sucesso!");
    }


}


function errorInput(input, message) {
    const formItem = input.parentElement; //acessa o elemento pai(form-content)
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-content error"
}