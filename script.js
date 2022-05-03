let faqBtn = document.querySelectorAll('.faq-div button');
let faqInfo = document.querySelectorAll('.faq-div div');
let faqDiv = document.querySelectorAll('.faq-div');


faqBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    
    //want to close the other accordion while clicking another
    faqInfo.forEach(faqInfo => {
      if(
        e.target.nextElementSibling !== faqInfo && faqInfo.classList.contains('active') ) {
        faqInfo.classList.remove('active');
        // faqDiv.classList.remove('open')
        faqBtn.forEach(btn => btn.classList.remove('active'))
        faqDiv.forEach(btn => btn.classList.remove('open'))
      }
    })
    
    let info = btn.nextElementSibling;
    let div = btn.parentElement
    div.classList.toggle('open')
    
    info.classList.toggle('active')
    btn.classList.toggle('active')
    
  })
})

//remove active class when you click on the screen
window.onclick = (e) => {
  if(!e.target.matches('.faq-div button')) {
    faqBtn.forEach(btn => btn.classList.remove('active'));
    faqInfo.forEach(btn => btn.classList.remove('active'));
    faqDiv.forEach(btn => btn.classList.remove('open'))
  }
}