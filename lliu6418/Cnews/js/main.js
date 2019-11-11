window.onload=function () {
    //Make the navigation bar turn black when the page scrolls
    document.querySelector('body').addEventListener('scroll',function () {
        if(document.querySelector('body').scrollTop>60){
            document.querySelector('#nav').className='bg'
        }else{
            document.querySelector('#nav').className=''
        }
    })
    //Move the mouse click to jump to signup
    document.querySelector('#signup').addEventListener('click',function () {
        window.location.href='./signup.html'
    })
    //Click to make login pop up
    document.querySelector('#login').addEventListener('click',function () {
        if(document.querySelector('.login').className=='login'){
            document.querySelector('.login').className='login show'
        }else{
            document.querySelector('.login').className='login'
        }
    })
    // Hide the login input box when clicking login
    document.querySelector('.login .btn').addEventListener('click',function () {
        document.querySelector('.login').className='login'
    })
}