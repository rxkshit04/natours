require("core-js/modules/es.regexp.flags.js");
require("regenerator-runtime/runtime");
var $jRu6q$axios = require("axios");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/* eslint-disable */ 

/* eslint-disable */ const $1f74116098716907$export$4c5dd147b21b9176 = (locations)=>{
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/jonasschmedtmann/cjvi9q8jd04mi1cpgmg7ev3dy',
        scrollZoom: false
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc)=>{
        // Create marker
        const el = document.createElement('div');
        el.className = 'marker';
        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        }).setLngLat(loc.coordinates).addTo(map);
        // Add popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};


/* eslint-disable */ // Imports

/* eslint-disable */ const $eb186a90ec6b353c$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector('.alert');
    if (el) el.parentElement.removeChild(el);
};
const $eb186a90ec6b353c$export$de026b00723010c1 = (type, msg, time = 7)=>{
    $eb186a90ec6b353c$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout($eb186a90ec6b353c$export$516836c6a9dfc573, time * 1000);
};


const $ee7be85ce665b1f9$export$596d806903d1f59e = async (email, password)=>{
    try {
        const res = await (0, ($parcel$interopDefault($jRu6q$axios)))({
            method: 'POST',
            url: '/api/v1/users/login',
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status === 'success') {
            (0, $eb186a90ec6b353c$export$de026b00723010c1)('success', 'Logged in successfully!');
            window.setTimeout(()=>location.assign('/'), 1500);
        }
    } catch (err) {
        (0, $eb186a90ec6b353c$export$de026b00723010c1)('error', err.response.data.message);
    }
};
const $ee7be85ce665b1f9$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const res = await (0, ($parcel$interopDefault($jRu6q$axios)))({
            method: 'GET',
            url: '/api/v1/users/logout'
        });
        if (res.data.status === 'success') location.replace('/');
    } catch (err) {
        (0, $eb186a90ec6b353c$export$de026b00723010c1)('error', 'Error logging out! Try again.');
    }
};


/* eslint-disable */ 

const $608aa7f74c069c45$export$f558026a994b6051 = async (data, type)=>{
    try {
        const url = type === 'password' ? '/api/v1/users/updateMyPassword' : '/api/v1/users/updateMe';
        const res = await (0, ($parcel$interopDefault($jRu6q$axios)))({
            method: 'PATCH',
            url: url,
            data: data
        });
        if (res.data.status === 'success') (0, $eb186a90ec6b353c$export$de026b00723010c1)('success', `${type.toUpperCase()} updated successfully!`);
    } catch (err) {
        (0, $eb186a90ec6b353c$export$de026b00723010c1)('error', err.response.data.message);
    }
};


/* eslint-disable */ 

const $422a913a0b98e173$var$stripe = Stripe('pk_test_51R8awIPUKGbkpuaiKhOzcbZSxbYhNppKfxBlkhPEua58ysjQeUgIxBPAgIrQpA0oFyA0GSCgoE4PK60bJ9zBHfae006PMwzz5j');
const $422a913a0b98e173$export$8d5bdbf26681c0c2 = async (tourId)=>{
    try {
        // 1) Get checkout session from API
        const session = await (0, ($parcel$interopDefault($jRu6q$axios)))(`/api/v1/bookings/checkout-session/${tourId}`);
        // console.log(session);
        // 2) Create checkout form + chanre credit card
        await $422a913a0b98e173$var$stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        (0, $eb186a90ec6b353c$export$de026b00723010c1)('error', err);
    }
};



// DOM ELEMENTS
const $6ffb7cff22436536$var$mapBox = document.getElementById('map');
const $6ffb7cff22436536$var$loginForm = document.querySelector('.form--login');
const $6ffb7cff22436536$var$logOutBtn = document.querySelector('.nav__el--logout');
const $6ffb7cff22436536$var$userDataForm = document.querySelector('.form-user-data');
const $6ffb7cff22436536$var$userPasswordForm = document.querySelector('.form-user-password');
const $6ffb7cff22436536$var$bookBtn = document.getElementById('book-tour');
// DELEGATION
if ($6ffb7cff22436536$var$mapBox) {
    const locations = JSON.parse($6ffb7cff22436536$var$mapBox.dataset.locations);
    (0, $1f74116098716907$export$4c5dd147b21b9176)(locations);
}
if ($6ffb7cff22436536$var$loginForm) $6ffb7cff22436536$var$loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    (0, $ee7be85ce665b1f9$export$596d806903d1f59e)(email, password);
});
if ($6ffb7cff22436536$var$logOutBtn) $6ffb7cff22436536$var$logOutBtn.addEventListener('click', (0, $ee7be85ce665b1f9$export$a0973bcfe11b05c9));
if ($6ffb7cff22436536$var$userDataForm) $6ffb7cff22436536$var$userDataForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);
    (0, $608aa7f74c069c45$export$f558026a994b6051)(form, 'data');
});
if ($6ffb7cff22436536$var$userPasswordForm) $6ffb7cff22436536$var$userPasswordForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await (0, $608aa7f74c069c45$export$f558026a994b6051)({
        passwordCurrent: passwordCurrent,
        password: password,
        passwordConfirm: passwordConfirm
    }, 'password');
    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
});
if ($6ffb7cff22436536$var$bookBtn) $6ffb7cff22436536$var$bookBtn.addEventListener('click', (e)=>{
    e.target.textContent = 'Processing...';
    const { tourId: tourId } = e.target.dataset;
    (0, $422a913a0b98e173$export$8d5bdbf26681c0c2)(tourId);
});
const $6ffb7cff22436536$var$alertMessage = document.querySelector('body').dataset.alert;
if ($6ffb7cff22436536$var$alertMessage) (0, $eb186a90ec6b353c$export$de026b00723010c1)('success', $6ffb7cff22436536$var$alertMessage, 20);


//# sourceMappingURL=app.js.map
