/**
 * Calculates your age
 * @param {Date} birthdate The year that you were born
 * @returns {Number} The current age
 */
function ageCalc(birthdate){
    const current = new Date(),
          setDOB = new Date(birthdate),
          diff = current.getTime() - setDOB.getTime(),
          setAge = new Date(diff),
          age = Math.abs(setAge.getUTCFullYear() - 1970);
    return age;
}
document.querySelector('.setAge').innerText = ageCalc('08/29/2004');
//Sets the loaded target and prevents elements from displaying on load
setTimeout(()=>{
    window.location.hash = document.querySelector('[page-main]').getAttribute('page-target').toLocaleLowerCase();
    document.querySelectorAll('.page').forEach((e)=>{
        if(e.getAttribute('page-target').toLocaleLowerCase()===window.location.hash.replace('#','')){
            const pageConnector = document.querySelector('.page-connector[href="#'+e.getAttribute('page-target')+'"]');
            pageConnector.classList.add('active');
            e.classList.remove('noshow');
        }else{
            document.querySelector('.page-connector[href="#'+e.getAttribute('page-target')+'"]').classList.remove('active');
            e.classList.add('noshow');
            e.classList.add('loaded');
        }
    });
   setTimeout(()=>{
        document.querySelectorAll('.loaded').forEach((e)=>{
            e.classList.remove('loaded');
        });
   },4000); 
},0);
//Updates on hash change to display page
window.addEventListener('hashchange',() => {
    document.querySelectorAll('.page').forEach((e)=>{
        if(e.getAttribute('page-target').toLocaleLowerCase()===window.location.hash.replace('#','')){
            const pageConnector = document.querySelector('.page-connector[href="#'+e.getAttribute('page-target')+'"]');
            pageConnector.classList.add('active');
            e.classList.remove('noshow');
        }else{
            document.querySelector('.page-connector[href="#'+e.getAttribute('page-target')+'"]').classList.remove('active');
            e.classList.add('noshow');
        }
    });
},false);
//Phase to back with navbar toggle(mobile only)
const navCollapse = document.getElementById('toggleNavbar')
navCollapse.addEventListener('show.bs.collapse', event => {
  document.querySelectorAll('.page').forEach((e)=>{
    e.classList.add('inback');
  });
});
navCollapse.addEventListener('hide.bs.collapse', event => {
    document.querySelectorAll('.page').forEach((e)=>{
      e.classList.remove('inback');
    });
});
navCollapse.addEventListener('hidden.bs.collapse', event => {
    document.querySelectorAll('.page').forEach((e)=>{
      e.classList.remove('inback');
    });
});

//Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
//check if image is loaded
document.querySelector('.profilePic').addEventListener('error',()=>{
    document.querySelector('.noimg-err').style.display = 'flex';
});