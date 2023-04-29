const initLinkChoosen = () => {
  const nav = document.querySelectorAll('.navigation-menu-link');
  const url = document.location.href;
  
  console.log(url);
  for(let i = 0; i < nav.length; ++i) {
    let prev = nav[i];
    if(nav[i].href === url) {
      nav[i].className += (' navigation-menu-link-active');
      nav[i - 2].className -= (' navigation-menu-link-active');
    }
  }
};

initLinkChoosen();