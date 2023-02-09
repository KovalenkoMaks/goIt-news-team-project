   document.querySelector('.ligth').addEventListener('click',() =>{

    if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
    }
    
    else{
        localStorage.setItem('theme', 'dark')
    }
    
    addDarkClassToBody()
    });
    
    function addDarkClassToBody() {
        try {
            if (localStorage.getItem('theme') === 'dark'){
            document.querySelector('body').classList.add('dark');
        } 
        else{
            document.querySelector('body').classList.remove('dark');
        }
     } catch (err) { }
    }
    addDarkClassToBody ();

    
    