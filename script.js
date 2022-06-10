function depa(val){
    if(val==1)
    {
        document.getElementById('s2').style.display='block';
        document.getElementById('t2').style.display='none';
        document.getElementById('ss3').style.display='none';
    }
    if(val==2)
    {
        document.getElementById('ss3').style.display='block';
        document.getElementById('t2').style.display='block';
        document.getElementById('s2').style.display='none';
    }
}
function myfun(){
    alert("Tickets Are Availbles");
    document.getElementById('t1').style.display='block';

}
function book()
{
    alert(" Booking Successfully.....!");
}