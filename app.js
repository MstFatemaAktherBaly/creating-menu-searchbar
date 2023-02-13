// menu section start
document.getElementById('btn').addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('active')
})
// menu section end


// searchbar section start
document.getElementById('option').addEventListener('click',function(){
    document.getElementById('searchbar').classList.toggle('active')
})
// searchbar section end

// password section start
document.getElementById('eyeon').addEventListener('click',function(){

    if (document.getElementById('password').type ==='text'){
        document.getElementById('password').type = 'password';
        document.getElementById('passeye').classList.add('fa-eye-slash')
        document.getElementById('passeye').classList.remove('fa-eye')
    }
    else{
        document.getElementById('password').type = 'text';
        document.getElementById('passeye').classList.add('fa-eye')
        document.getElementById('passeye').classList.remove('fa-eye-slash')
    }
})

// password section end

let date1=document.getElementById('date1')
date1.addEventListener('keyup',function(){
    document.getElementById('date2').innerText = date1.value;

   
})

let name1 = document.getElementById('name1')
name1.addEventListener('keyup',function(){
    document.getElementById('name2').innerText = name1.value;

  
   
})
