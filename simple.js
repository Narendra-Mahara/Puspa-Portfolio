

    function formsubmit() {
        // You can add form validation logic here before showing the success message
        // For simplicity, we'll just show the success message directly
        alert('Your form submitted successfully');
        
        
    }
    function AlertMessage(){
        // You can add form validation logic here before showing the success message
        // For simplicity, we'll just show the success message directly
        alert('Under Consturction ✌️');
        
        
    }

    burger = document.querySelector('.burger')
    nav = document.querySelector('.nav')
    right_side = document.querySelector('.right_side')
    
    burger.addEventListener('click', ()=>{
        right_side.classList.toggle('v-class');
        nav.classList.toggle('h-nav');

    })


