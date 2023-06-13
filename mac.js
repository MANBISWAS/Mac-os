launch = document.getElementById('lauchpad')
launched = document.getElementById('launched')
launch.addEventListener('click',()=>{
        console.log('Clicked');
        if(launched.style.opacity == '0'){
            launched.style.opacity = '1'
        }else{
            launched.style.opacity = '0'
        };
}
)