let header = document.getElementsByClassName('row')[0];

header.innerHTML = `
  <div class="w-100 d-flex flex-wrap justify-content-around col-12 position-relative">
    <div class="text col-lg-5 col-12 order-2 order-lg-1 text-center text-lg-start"> 
      <h1>Next generation digital banking</h1>
      <p>
        Take Your financial life online. Your Easybank account will be a one-stop-shop for spending,
        saving, budgeting, and much more.
      </p>
      <div>
        <button class="nav-btn">Request Invite</button>
      </div>
    </div>


    <div class="col-lg-6 col-12 containImage d-flex justify-content-center align-items-center order-1 order-lg-2 position-relative">
      <img class="image img-fluid" src="images/bg-intro-desktop.svg" alt=""/>
      <div class="position-absolute top-0 bottom-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
        <img class="image1 img-fluid" src="images/image-mockups.png" alt=""/> 
      </div>
    </div>
  </div>
`;

let easyBank = document.getElementsByClassName('easyBank')[0];

let cards = [
   {
    text1: 'Online banking',
    text2: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    image: "images/icon-online.svg"
   },
   {
    text1: 'Simple Budgeting',
    text2: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
    image: 'images/icon-budgeting.svg'
   },
   {
    text1: 'Fast Onboarding',
    text2: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    image: 'images/icon-onboarding.svg'
   },
   {
    text1: 'Open API',
    text2: "Manage your savings, investments, pension, and much more from one account. Tracking money made easier.",
    image: 'images/icon-api.svg'
   },
];

let cardsHTML = cards.map((card) => `
  <div class="col-lg-3 gap-5 col-12 mb-4 d-flex flex-column text-lg-start text-center justify-content-center align-items-lg-start align-items-center"> 
    <img class="img-fluid me-3 gap-3" src="${card.image}" alt="${card.text1}"/>
    <div class="holder">
      <h5 class="mb-3">${card.text1}</h5>
      <p class="para">${card.text2}</p>
    </div>
  </div>
`).join('');

easyBank.innerHTML = `
  <div class="container mt-5 col-lg-12 col-12 text-center text-lg-start">
    <div class="hold"> 
      <h2 class="header2">Why Choose Easybank?</h2>
      <p class="para">We leverage Open Banking to turn your bank account into your financial hub.</p>
      <p class="para">Control your finances like never before.</p>
    </div>
    <div class="row">
      ${cardsHTML}
    </div>
  </div>
`;

let articles =document.getElementsByClassName('articles')[0];

let art=[
  {
    text3:'By Claire Robinson',
    text4:'Recieve any money in any currency with no fees',
    images:'images/image-currency.jpg',
    text5:"The world is gettting smaller and wer're becoming more mobile. So why should you be forced to only recieve money in a single."
  },
  {
    text3:'By Wilson Hutton',
    text4:'Treat yourself without worrying about money',
    images:'images/image-restaurant.jpg',
    text5:"Our simple bubgeting feature allows you to separate out your spending and set realistic limits each month. That means you. "
  },
  {
    text3:'By Wilson Huston',
    text4:'Take your Easybank card wherever you go ',
    images:'images/image-plane.jpg',
    text5:"We want you to enjoy your travels. This is why we don't charge any fees on purchases while your're abroad. We'll even show you ..."
  },
  {
    text3:'By Claire Robinson',
    text4:'Our invte-only Beta accounts are now live',
    images:'images/image-confetti.jpg',
    text5:"After a lot of hardwork by the whole team, we're to launch our closed beta. It's easy to request an invite through the site. "
  },
]

let artHTML = art.map((art)=>`
     <div class="col-lg-3  col-12 mb-4 d-flex flex-column text-start justify-content-center align-items-lg-start align-items-center"> 
    <img class="w-100 me-3" src="${art.images}" alt="${art.text4}"/>
    <div class="holder p-lg-0 p-4">
    <p class="paras">${art.text3} </p>
      <h6 class="mb-3">${art.text4}</h6>
      <p class="para">${art.text5}</p>
    </div>
  </div>

`).join('')
articles.innerHTML = `
   <div class=" mt-5 col-lg-12 col-12 text-center text-lg-start">
    <div class="mb-5"> 
      <h2 class="header2">Latest Articles</h2>
    </div>
    <div class="row">
      ${artHTML}
    </div>
  </div>
`
let foot = document.getElementsByClassName('footer')[0];

foot.innerHTML = ` 
      <div class="container  col-lg-12 col-12 d-flex flex-wrap flex-column flex-lg-row align-items-center text-center"> 
  <div class="d-flex flex-column align-items-center">
    <img class="last-image mt-5 mb-5" src="images/logo.svg" alt="">
    <div class="d-flex justify-content-center gap-3">
      <img src="images/icon-facebook.svg" alt=""/>
      <img src="images/icon-youtube.svg" alt=""/>
      <img src="images/icon-twitter.svg" alt=""/>
      <img src="images/icon-pinterest.svg" alt=""/>
      <img src="images/icon-instagram.svg" alt=""/>
    </div>
  </div>

  <div class="d-flex mx-auto flex-column text-lg-start flex-lg-row justify-content-center mt-5">
    <ul class="col-lg-12 list-unstyled">
      <li>About us</li>
      <li>Contact</li>
      <li>Blog</li>
    </ul>
    <ul class="col-lg-12 list-unstyled">
      <li>Careers</li>
      <li>Support</li>
      <li>Privacy policy</li>
    </ul>
  </div>

  <div class=" mt-4">
    <button class="nav-btn m-2">Request Invite</button>
    <p class="para"> &#169; Easybank. All Rights Reserved </p>
  </div>
</div>


`