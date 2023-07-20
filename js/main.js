const initApp = () => {

  const handleElements = () => {

    const options = {
      toggle: document.querySelector('[data-toggle]'),
      nav: document.querySelector('[data-nav]'),
      text: document.querySelectorAll('[data-text]'),
      items: document.querySelectorAll('[data-item]')
    }

    const icons = {
      bars: "<i class='fa-solid fa-bars'></i>",
      xmark: "<i class='fa-solid fa-xmark'></i>"
    }

    const {toggle, nav, text, items} = options;
    const {bars, xmark} = icons;

    const toggleNav = () => {
      const intersection = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

          const clientRect = entry.boundingClientRect;
          const width = parseInt(clientRect.width) > 80;

          isActive = width ?
            nav.classList.remove('open') + (toggle.innerHTML = bars) :
            nav.classList.add('open') + (toggle.innerHTML = xmark);
          
            text.forEach(element => {
              width ?
                element.classList.remove('open') :
                element.classList.add('open')
            })

          observer.unobserve(entry.target)
        })
      })

      intersection.observe(nav)
      
    }

    function activeMenuItems() {
      items.forEach(item => {
        item.classList.remove('active');
        this.classList.add('active')
      })
    }

    const eventTarget = (element, event, callback, capture=false) => {
      element.addEventListener(event, callback, !!capture)
    }

    const iterateEachElement = (element, event, callback) => {
      element.forEach(item => item.addEventListener(event, callback))
    }

    eventTarget(toggle, 'click', toggleNav);
    iterateEachElement(items, 'click', activeMenuItems)
  }

  handleElements()
}

document.addEventListener('DOMContentLoaded', initApp)