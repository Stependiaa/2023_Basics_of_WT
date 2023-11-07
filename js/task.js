function verify() {
   a = 10.11; // Ребро кубической ёмкости 
   h = 9.7; // высота цилиндлрической ёмкости 
   r = 6.4; // радиус основания цилиндлрической ёмкости 
   m = 10000; // объём жидкости 


   const id_a = document.getElementById('a')
   str_a = id_a.innerHTML
   a = parseFloat(str_a)
   console.log(a)

   const id_h = document.getElementById('h')
   str_h = id_h.innerHTML
   h = parseFloat(str_h)
   console.log(h)

   const id_r = document.getElementById('r')
   str_r = id_r.innerHTML
   r = parseFloat(str_r)
   console.log(r)

   const id_m = document.getElementById('m')
   str_m = id_m.innerHTML
   m = parseFloat(str_m)
   console.log(m)

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
      result = result.concat('обе ёмкости можно заполнить.')
      console.log('обе ёмкости можно заполнить')
   }
   else {
      result = result.concat('обе ёмкости нельзя заполнить.')
      console.log('обе ёмкости нельзя заполнить')
   };
   console.log(result);

const answer = document.getElementById('answer').innerText= result;

}


const elementverify = document.getElementById('verify')
elementverify.addEventListener('click', verify);

