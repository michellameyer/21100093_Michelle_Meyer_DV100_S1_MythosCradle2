const successMessage =
    document.getElementById('successMessage')

// SEARCH
let searchKeywords = [
    {
        name: 'Home',
        page: '/index.html'
    },

    {
        name: 'Adopt',
        page: '/pages/adopt.html'
    },

    {
        name: 'Creature',
        page: '/pages/adopt.html#creature'
    },

    {
        name: 'Contact',
        page: '/pages/contact.html'
    },

    {
        name: 'Location',
        page: '/pages/contact.html#location'
    },

    {
        name: 'Successful adoptions',
        page: '/index.html#successfulAdoptions'
    }
];

const results = document.querySelector('.searchResult');
const searchInput = document.getElementById('searchInput');

searchInput.onkeyup = function(){
    let result = [];
    let input = searchInput.value;
    
    if(input.length){
        result = searchKeywords.filter((keyword) => {
            return keyword.name.toLowerCase().includes(input.toLowerCase());
        });

        display(result);
        results.style.display = 'block';
    }

    else{
    results.style.display = 'none';
    }   
}

function display(result){
    const submission = result.map((creature) => {
        return `
            <li>
                <a href="${creature.page}">
                    ${creature.name}
                </a>
            </li>
        `;
    }).join('');

    results.innerHTML = `<ul>${submission}</ul>`;
}

// ADOPT
function decQty(){
    let num = document.getElementById('inputVal').value;
    if(num > 0){
        num--;
    }
    document.getElementById('inputVal').value = num;
}

function incQty(){
    let num = document.getElementById('inputVal').value;
        num++;
    document.getElementById('inputVal').value = num;
}

let cradle = [];

document.addEventListener('DOMContentLoaded', () => {
    const addCreature = document.getElementById('addAzuron');

console.log(addCreature);

addCreature.addEventListener('click', () => {

        const quantity = Number(document.getElementById('inputVal').value);

        if (quantity <= 0) return;

        const existingItem = cradle.find(item => item.name === 'Blue Dragon - Azuron');

        if (existingItem){
            existingItem.quantity += quantity;
        }

        else{
            cradle.push({
                name: 'Blue Dragon - Azuron',
                price: 2500,
                image: '../assets/img/adopt1.png',
                quantity: quantity
            });
        };

        renderCradle();
    });
});



// CONTACT
(() => {
  'use strict'

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // NAME FIELD
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim().length < 3) {
            nameInput.setCustomValidity(
                'Please enter your first name (min. 3 characters).'
            )}
        else {
            nameInput.setCustomValidity('')
        }
    });

    // EMAIL FIELD -> Javascript not necessary, as HTML already checks validity as a result of type="email". if validation through Javascript: if (!emailInput.value.includes('@') || !email.includes('.'))

    // MESSAGE FIELD
    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim().length < 20) {
            messageInput.setCustomValidity(
                'Please enter a message containing at least 20 characters.'
        )}
        else {
            messageInput.setCustomValidity('')
            }
        })

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            form.classList.add('was-validated')
        }
        else {
            event.preventDefault()
            successMessage.textContent = 'Your message has been sent. You will hear from us shortly!'

            form.reset()
            form.classList.remove('was-validated')
        }
    }, false)
    })
});