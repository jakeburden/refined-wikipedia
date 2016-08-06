document.addEventListener('DOMContentLoaded', () => {
  
 const ui = {
   headlines: document.querySelectorAll('.mw-headline')
 }
 
 ui.headlines.forEach(headline => {
  const id = headline.id
  const content = headline.textContent 
  const aTag = (
    `<a class='refined-anchor' href='#${id}' aria-hidden='true'>
      #
    </a>`)
  
  headline.innerHTML = content + aTag
  
 })
 
 document.body.addEventListener('keydown', e =>  {
   if (e.which === 68) {
      document.body.classList.toggle('dark-mode')
   }
  })
})

