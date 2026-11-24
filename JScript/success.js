window.onload = () => {

    // -- ELEMENTS

    const paidBookImage =
        document.querySelector('.paid-book-img img');

    const bookTitle =
        document.getElementById('BookTitle');

    const author =
        document.getElementById('author');

    const idNumber =
        document.getElementById('idNumber');

    const datePaid =
        document.getElementById('datePaid');

    const amountPaid =
        document.getElementById('amountPaid');



    //  GET STORED DATA

    const storedBookImage =
        sessionStorage.getItem('bookImage');

    const storedBookTitle =
        sessionStorage.getItem('bookTitle');

    const storedBookAuthor =
        sessionStorage.getItem('bookAuthor');

    const lastFourDigits =
        sessionStorage.getItem('lastFourDigits');



    // -- DISPLAY BOOK INFO

    paidBookImage.src = storedBookImage;

    bookTitle.textContent = storedBookTitle;

    author.textContent = storedBookAuthor;



    // -- RANDOM GENERATED ORDER INFO 

    const randomOrderID =
        Math.floor(Math.random() * 1000000);

    const currentDate = new Date();

    const formattedDate =
        currentDate.toLocaleDateString();



    idNumber.textContent =
        `Order ID: #${randomOrderID}`;

    datePaid.textContent =
        `Date: ${formattedDate}`;

    amountPaid.textContent =
        `Card: **** **** **** ${lastFourDigits}`;

};