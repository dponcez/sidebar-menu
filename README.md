# Sidebar Menu

:link: Go to [Online Tutorials - YouTube](https://www.youtube.com/watch?v=PuLujpkLRUM) to see how to create a *Dashboar Sidebar Menu*.

I was inspired on *Online Tutorials* video to create or replicate the Dashboard Sidebar Menu, to build this simple project it was used three technologies: 

1. **HTML** to create the structure. 
2. **SASS** a preprocessor to compile to **CSS**.
3. **JS** to add functionality.

### Structure

```html

<!DOCTYPE html>
<html lang='en'>
<head>
  <!-- Basic Page Needs -->
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <!-- Mobile Specific Metas -->
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Sidebar Menu</title>
  <!-- Fonts -->
  <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Abel&family=Play&display=swap'>
  <!-- CSS -->
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'>
  <link rel='stylesheet' href='css/main.css'>
</head>
<body>
  <div class='container'>
    <header class="header background--image">
      <div class="header--content">
        <h1 class="heading">the future comes from you!</h1>
        <p class="header--info">build the world you want and fly through it.</p>
      </div>
      <div class="info--container">
        <div class="info">
          <p>Gulf of Mexico, United States</p>
          <p>Photo of <a href="https://unsplash.com/@nasa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">NASA</a> on <a href="https://unsplash.com/es/fotos/Q1p7bh3SHj8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  
        </div>
      </div>
      <div class="toggle--container">
        <button class="toggle" data-toggle="toggle">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <nav class="nav" data-nav="nav">
        <ul class="nav--list">
          <li class="nav--item active" data-item>
            <a href="#" class="nav--link">
              <i class="icon fa-solid fa-house"></i>
              <span class="text" data-text="text">home</span>
            </a>
          </li>
          <li class="nav--item" data-item>
            <a href="#" class="nav--link">
              <i class="icon fa-solid fa-user"></i>
              <span class="text" data-text="text">about</span>
            </a>
          </li>
          <li class="nav--item" data-item>
            <a href="#" class="nav--link">
              <i class="icon fa-solid fa-blog"></i>
              <span class="text" data-text="text">blog</span>
            </a>
          </li>
          <li class="nav--item" data-item>
            <a href="#" class="nav--link">
              <i class="icon fa-solid fa-diagram-project"></i>
              <span class="text" data-text="text">project</span>
            </a>
          </li>
          <li class="nav--item" data-item>
            <a href="#" class="nav--link">
              <i class="icon fa-solid fa-address-book"></i>
              <span class="text" data-text="text">contact</span>
            </a>
          </li>
          <!-- social media -->
          <hr>
          <li class="nav--item" data-item>
            <a href="#" class="nav--link">
              <i class="icon fa-brands fa-facebook"></i>
              <span class="text" data-text="text">facebook</span>
            </a>
          </li>
          <li class="nav--item" data-item>
            <a href="#" class="nav--link">
              <i class="icon fa-brands fa-twitter"></i>
              <span class="text" data-text="text">twitter</span>
            </a>
          </li>
          <li class="nav--item" data-item>
            <a href="#" class="nav--link">
              <i class="icon fa-brands fa-github"></i>
              <span class="text" data-text="text">github</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <script src='js/main.js'></script>
</body>
</html>
```

### Styles

```scss

@import '_variables';

*,
*::after,
*::before {
  padding: 0;
  box-sizing: border-box
}

// reset
html,
body { margin: 0; }

:is(h1, h2, p, a) { overflow-wrap: break-word; }

li { list-style: none; }
a {text-decoration: none; }

figure { padding: 0; }

button {
  background-color: transparent;
  border: 0;
  border-radius: 0;
  &:focus { outline: none; }
}

img { width: $size; }

// remove animations for people who's turned them off
@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

// flexbox
.icon,
.toggle,
.nav--list,
.nav--link,
.header--content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 1fr;

  .header {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 4rem 80% 5rem;
    place-items: center;
    position: relative;
    height: $svh;

    &.background--image {
      background: url('../image/medium-image-nasa.jpg') no-repeat center / cover;

      &::before {
        content: '';
        width: $size;
        height: $size;
        position: absolute;
        inset: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0,0,0,.5);
      }
    }

    &--content {
      flex-direction: column;
      grid-row: 2;
      grid-column: 1 / -1;
      z-index: 1;

      :is(.heading, .header--info) {
        margin: $rd;
        color: $light-color;
        user-select: none;
      }
  
      .heading {
        font-family: $fnt-play;
        font-size: clamp(3vw, .75vw + .6rem, 5rem);
        text-transform: uppercase;
      }
  
      .header--info {
        font-family: $fnt-abel;
        font-size: clamp(2vw, 1vw + .5rem, 4vw);
        &:first-letter { text-transform: uppercase; }
      }
    }

    .info--container {
      grid-row: 3;
      grid-column: 3;
      .info {
        position: absolute;
        right: 0;
        bottom: 0;
        padding-inline-end: $pd;

        & p {
          margin-block: $rd;
          font-family: $fnt-abel;
          color: $light-color;
          & a { color: #3498f4; }
        }
      }
    }

    .toggle--container {
      grid-row: 1;
      grid-column: 3;
      position: relative;
      right: -35%;
      z-index: 2;

      .toggle {
        color: $light-color;
        font-size: $pd;
        cursor: pointer;
      }
    }

    .nav {
      grid-column: 1;
      width: 5rem;
      height: $svh;
      position: fixed;
      left: 0;
      background-color: $light-color;
      transition: width 450ms cubic-bezier(0.94, 0.17, 0.15, 1.01);
      overflow: hidden;
      z-index: 2;

      &.open {
        width: 12rem;
        transition: width 250ms cubic-bezier(0.74, 0.27, 0.5, 1.05);
      }

      &--list {
        flex-direction: column;
        justify-content: space-around;
        height: $size;
        padding-inline-start: 1rem;
        margin: 0;

        & hr {
          width: calc($size * .8);
          margin: 0;
        }
        
        .nav--item {
          display: flex;
          align-self: flex-start;
          width: $size;
          padding: 0;
          position: relative;
          cursor: pointer;

          &.active {
            background-color: $dark-color;
            position: relative;
            border-radius: 5rem 0 0 5rem;

            &::before,
            &::after {
              content: '';
              width: 1rem;
              height: 1rem;
              position: absolute;
              right: 0;
              background-color: transparent
            }

            &::before {
              top: -1rem;
              border-bottom-right-radius: 5rem;
              box-shadow: .2rem .2rem 0 .15rem $dark-color
            }

            &::after {
              bottom: -1rem;
              border-top-right-radius: 5rem;
              box-shadow: .2rem -.2rem 0 .15rem $dark-color
            }

            .nav--link { 
              color: $light-color;
              .icon {
                transform: scale(1.05);
                transition: .2s cubic-bezier(0.9, -0.02, 0.15, 0.98);
              }
              .icon::after {
                content: '';
                width: 2.5rem;
                height: 2.5rem;
                position: absolute;
                border-radius: 50%;
                background-color: hsl(0, 68%, 44%);
                box-shadow: 0 0 0 .2rem $light-color inset;
                z-index: -1;
              }
            }
          }

          .nav--link {
            padding: 1rem;
            gap: 0 2rem;
            position: relative;
            color: $dark-color;

            .icon { z-index: 2 }
            .text {
              font-family: $fnt-play;
              text-transform: capitalize;
              opacity: 0;
              transition: opacity 450ms cubic-bezier(0.94, 0.17, 0.15, 1.01);
              &.open { 
                opacity: 1;
                transition: opacity 300ms cubic-bezier(0.94, 0.17, 0.15, 1.01)
              }
            }
          }
        }
      }
    }
  }
}
```

### Functionality

```js

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
```

In the above code, **Intersection Observer API** was used to prevent excessive use of the **classList.contains()** method, if that class contains a given value to be removed or added based on the user clicking the menu button, for example.

**Before**

Using the *if/else* statement.

```js
if(nav.classList.contains('open')){
  nav.classList.remove('open')
}else {
  nav.classList.add('open')
}
```

Using the *Ternary Operator*

```js
const isActive = nav.classList.contains('open') ?
  nav.classList.remove('open') :
  nav.classList.add('open')
```

**Now**

Using *IntersectionObserver API*

**Intersection Observer** let you know when an element is observed, if that element enter or exits of the browser's viewport. But in this case we used *new IntersectionObserver() API* to observe the size of the nav element, if the size of this element match with the observer, we add or remove the *open class* when the toggle button is pressed.

You can use an *if/else* statement or a *Ternary Operator* as well.

```js
const clientRect = entry.boundingClientRect;
const width = parseInt(clientRect.width) > 80;

const isActive = width ?
  nav.classList.remove('open') :
  nav.classList.add('open')
```

:link: Go to [web.dev - IntersectionObserver](https://web.dev/intersectionobserver/) or [MDN - Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to know more about this **API**.