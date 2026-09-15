document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const user = document.getElementById('user');
    const pass = document.getElementById('pass');
    const msg = document.getElementById('msg');

    this.classList.add('was-validated');

    if (!user.value.trim() || !pass.value.trim()) {
        msg.style.color = "red";
        msg.innerText = "يرجى ملء الحقول";
        return;
    }

    if (user.value.trim() === "yousra" && pass.value.trim() === "12345") {
        msg.style.color = "green";
        msg.innerText = "تم تسجيل الدخول ✓";
    } else {
        msg.style.color = "red";
        msg.innerText = "كلمة المرور أو اسم المستخدم غير صحيح";
    }
});