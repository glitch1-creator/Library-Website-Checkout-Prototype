window.onload = () => {

    const buttons = document.querySelectorAll('.buttonPay');

    buttons.forEach(button => {

        button.addEventListener('click', () => {

            // GET DATA FROM BUTTON

            const image = button.dataset.image;

            const title =
                button.parentElement.querySelector('.BookTitle').textContent;

            const author =
                button.parentElement.querySelector('.author').textContent;



            // STORE DATA

            sessionStorage.setItem('bookImage', image);

            sessionStorage.setItem('bookTitle', title);

            sessionStorage.setItem('bookAuthor', author);


            // REDIRECT

            window.location.href = 'pay.html';

        });

    });

};