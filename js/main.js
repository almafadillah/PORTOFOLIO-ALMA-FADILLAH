const btns=document.querySelectorAll('.filter-btn');
const cards=document.querySelectorAll('.work-card');

btns.forEach(b=>{
  b.onclick=()=>{
    btns.forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    const f=b.dataset.filter;
    cards.forEach(c=>{
      c.style.display=(f==='all'||c.dataset.category===f)?'block':'none';
    });
  };
});
const filterButtons = document.querySelectorAll('.filter-item');
const workCards = document.querySelectorAll('.work-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {

    // active state
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    workCards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });

  });
});
