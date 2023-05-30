document.addEventListener('DOMContentLoaded',function () {

    mentee_form= document.querySelector('#mentee_form')
    mentor_form = document.querySelector('#mentor_form')
    mentee_btn = document.getElementById('mentee_btn')
    mentor_btn = document.getElementById('mentor_btn')

    mentee_btn.onclick = function() {
        mentor_form.style.display = 'none';
        mentee_form.style.display = 'block';
/*        document.getElementById('logincard').style.display = 'none';
         mentee_btn.classList.add('opacity-100'); 
        mentee_btn.classList.remove('opacity-50');
        mentor_btn.classList.add('opacity-50'); 
        mentor_btn.classList.remove('opacity-100'); */

    }
    mentor_btn.onclick= function() {
        mentor_form.style.display = 'block';
        mentee_form.style.display = 'none';
/*        document.getElementById('logincard').style.display = 'none';
         mentee_btn.classList.add('opacity-50'); 
        mentee_btn.classList.remove('opacity-100');
        mentor_btn.classList.add('opacity-100'); 
        mentor_btn.classList.remove('opacity-50');
 */

    };


})