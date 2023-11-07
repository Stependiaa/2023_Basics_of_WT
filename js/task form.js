function verify() {
   console.log('a, h, r, m')
   let a =parseInt(elementA.value);
   let h =parseInt(elementB.value);
   let r =parseInt(elementC.value);
   let m =parseInt(elementD.value);
   console.log(a, h, r, m)


   v_cube = a * a * a; // объем куба 
   v_cil = r * r * h * 3.14; // объем цилиндра 
   result = '';

   if (m > v_cube) {
      result = 'кубическую ёмкость можно заполнить; '
      console.log('кубическую ёмкость можно заполнить')
   }
   else {
      result = 'кубическую ёмкость нельзя заполнить; '
      console.log('кубическую ёмкость нельзя заполнить')
   };

   if (m > v_cil) {
      result = result.concat('цилиндрическую ёмкость можно заполнить; ')
      console.log('цилиндрическую ёмкость можно заполнить')
   }
   else {
      result = result.concat('цилиндрическую ёмкость нельзя заполнить; ')
      console.log('цилиндрическую ёмкость нельзя заполнить')
   };

   if (m > v_cil + v_cube) {
      result =  result.concat('обе ёмкости можно заполнить.')
      console.log('обе ёмкости можно заполнить')
   }
   else {
      result =  result.concat('обе ёмкости нельзя заполнить.')
      console.log('обе ёмкости нельзя заполнить')
   };
   console.log(result);


   document.getElementById('result').innerText = messageText + result;
   document.getElementsByName('result')[0].value = result
}



 function send() {

        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
} 
   

    
    


function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;





const elementA = document.getElementById("a");
elementA.addEventListener('input', verify);

const elementB = document.getElementById("h");
elementB.addEventListener('keyup', verify);

const elementC = document.getElementById("r");
elementC.addEventListener('keyup', verify);

const elementD = document.getElementById("m");
elementD.addEventListener('keyup', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)