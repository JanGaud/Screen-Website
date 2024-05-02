import { createClient } from '$lib/prismicio';

/**
 * Validates the form by checking the values of inputs for name, email, and message.
 * Displays errors under each respective input.
 * @param {HTMLFormElement} form - The form element to validate.
 */
export async function validateForm(form) {
    const client = createClient();
    const response = await client.getAllByType('form_errors');
    const formErrors = response.length > 0 ? response[0].data : {};

    let isValid = true;

    const nom = form.querySelector('#nom');
    const courriel = form.querySelector('#courriel');
    const message = form.querySelector('#message');

    const errorNom = document.getElementById('errorNom');
    const errorCourriel = document.getElementById('errorCourriel');
    const errorMessage = document.getElementById('errorMessage');

    if (errorNom) errorNom.textContent = '';
    if (errorCourriel) errorCourriel.textContent = '';
    if (errorMessage) errorMessage.textContent = '';

    // @ts-ignore
    if (!nom.value.trim()) {
        // @ts-ignore
        if (errorNom) errorNom.textContent = formErrors.no_name || 'Please enter your name.';
        isValid = false;
        // @ts-ignore
    } else if (nom.value.trim().length < 3) {
        // @ts-ignore
        if (errorNom) errorNom.textContent = formErrors.inv_name || 'Name must have at least 3 letters.';
        isValid = false;
    }

    // @ts-ignore
    if (!courriel.value.trim()) {
        // @ts-ignore
        if (errorCourriel) errorCourriel.textContent = formErrors.no_email || 'Email is required.';
        isValid = false;
        // @ts-ignore
    } else if (!validateEmail(courriel.value)) {
        // @ts-ignore
        if (errorCourriel) errorCourriel.textContent = formErrors.inv_email || 'Please enter a valid email address.';
        isValid = false;
    }

    // @ts-ignore
    if (!message.value.trim()) {
        // @ts-ignore
        if (errorMessage) errorMessage.textContent = formErrors.no_message || 'Please enter a message.';
        isValid = false;
    } else {
        // @ts-ignore
        const wordCount = message.value.trim().split(/\s+/).length;
        if (wordCount < 5) {
            // @ts-ignore
            if (errorMessage) errorMessage.textContent = formErrors.inv_message || 'Message must have at least 5 words.';
            isValid = false;
        }
    }

    if (isValid) {
        const formData = {
            // @ts-ignore
            name: nom.value,
            // @ts-ignore
            email: courriel.value,
            // @ts-ignore
            message: message.value
        };

        fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Form submitted successfully!', data);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    }


    return isValid;
}

/**
 * Validates an email address format using a regular expression.
 * @param {string} email
 * @returns {boolean}
 */
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}