const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
/*IMG*/
const logoImg = document.getElementById('logo-img');
logoImg.setAttribute("src",siteContent["images"]["logo-img"]);

const ctaImg = document.querySelector("#cta-img");
ctaImg.src=siteContent["images"]["cta-img"];

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["images"]["accent-img"];

/*Nav*/
const aTags = document.querySelectorAll("header nav a")
const navKeys = Object.keys(siteContent["nav"]);
const navValues = Object.values(siteContent["nav"])
for(let a = 0; a < aTags.length; a++){
  aTags[a].classList.add("italic");
  aTags[a].textContent = navValues[a];
}

/*MAIN CONTENT*/

const theContentArray = Object.values(siteContent["ana-içerik"]);
const theContentBody = document.querySelectorAll(".text-content");
theContentBody.forEach((c,i) => {
  c.querySelector("h4").textContent = theContentArray[i * 2];
  c.querySelector("p").textContent = theContentArray[i * 2 + 1];
})

/*CONTACT*/
const theContactArray = Object.values(siteContent["iletisim"]);
console.log(theContactArray);
const h4InContact = document.querySelector(".contact h4")
h4InContact.textContent = theContactArray[0];
const psInContact = document.querySelectorAll(".contact p")
for(let i = 0; i < theContactArray.length-1; i++){
  psInContact[i].textContent = theContactArray[i+1];
}

/*CTA*/

const ctaH1 = document.querySelectorAll(".cta-text h1");
ctaH1[0].textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

/*Footer*/
const link = document.querySelector("footer a");
link.classList.add("bold");
link.textContent=siteContent["footer"]["copyright"];




