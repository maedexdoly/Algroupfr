alert("لعبة التزليك الوحيدة");

    function showMessage() {
      // إنشاء رسالة منبثقة
      var message = document.createElement("div");
      message.setAttribute("class", "message");
      message.innerHTML = "تم التزليك بنجاح";
      message.style.color = "yellow";
      message.style.fontFamily ="'Rubik', sans-serif";
      message.style.position = "absolute";
      message.style.bottom = "115px";
      message.style.left = "135px" ;

      // عرض الرسالة المنبثقة
      document.body.appendChild(message);
    }