window.onload = () => {

    const cardNumInput = document.getElementById('cardNoDigits');
    const expMInput = document.getElementById('expMonthID');
    const expYInput = document.getElementById('expYearID');
    const cvcCodeInput = document.getElementById('cvcCode');

    const payBTN = document.getElementById('paySafeBTN');



    payBTN.addEventListener('click', async () => {

        const cardNum = cardNumInput.value.trim();
        const expM = expMInput.value.trim();
        const expY = expYInput.value.trim();
        const cvcCode = cvcCodeInput.value.trim();



        // CARD NUMBER VALIDATION 

        if(cardNum.length !== 16){

            alert('Card number must be 16 digits');

            cardNumInput.value = '';

            return;
        }



        // Check if card number contains only digits
        if(!/^\d+$/.test(cardNum)){

            alert('Card number must contain only numbers');

            cardNumInput.value = '';

            return;
        }



        // Check MasterCard prefix between(51-55)
        const firstTwo = parseInt(cardNum.substring(0,2));

        if(firstTwo < 51 || firstTwo > 55){

            alert('Only MasterCard numbers starting with 51-55 are accepted');

            cardNumInput.value = '';

            return;
        }



        // EXPIRY MONTH VALIDATION, IF VALUES ENTERED IS NOT 2 VALUES

        if(expM.length !== 2){

            alert('Expiration month must be 2 digits');

            expMInput.value = '';

            return;
        }



        // Check if month contains only numbers
        if(!/^\d+$/.test(expM)){

            alert('Expiration month must contain only numbers');

            expMInput.value = '';

            return;
        }



        // Check valid month range
        if(expM < 1 || expM > 12){

            alert('Invalid expiration month');

            expMInput.value = '';

            return;
        }



        // ------- EXPIRY YEAR VALIDATION

        if(expY.length !== 4){

            alert('Year must be 4 digits');

            expYInput.value = '';

            return;
        }



        // Check if year contains only numbers
        if(!/^\d+$/.test(expY)){

            alert('Expiry year must contain only numbers');

            expYInput.value = '';

            return;
        }



        // -CARD EXPIRY CHECK

        const currentDate = new Date();

        const currentMonth = currentDate.getMonth() + 1;

        const currentYear = currentDate.getFullYear();



        if(
            expY < currentYear ||
            (expY == currentYear && expM < currentMonth)
        ){

            alert('Card has expired');

            return;
        }



        // --- CVV VALIDATION

        if(cvcCode.length < 3 || cvcCode.length > 4){

            alert('CVV must be 3 or 4 digits');

            cvcCodeInput.value = '';

            return;
        }



        // Check CVV numbers only
        if(!/^\d+$/.test(cvcCode)){

            alert('CVV must contain only numbers');

            cvcCodeInput.value = '';

            return;
        }



        // API REQUEST.

        const paymentData = {

            master_card: Number(cardNum),
            exp_year: Number(expY),
            exp_month: Number(expM),
            cvv_code: cvcCode

        };




        // ERROR HANDLING
        try{

            const response = await fetch(
                'https://mudfoot.doc.stu.mmu.ac.uk/node/api/creditcard',
                {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify(paymentData)

                }
            );



            if(!response.ok){

                throw new Error('Payment failed');

            }



            const data = await response.json();

            alert(data.message);



            // Store last 4 digits for success page
            sessionStorage.setItem(
                'lastFourDigits',
                cardNum.slice(-4)
            );



            // Redirect to success page
            window.location.href = 'success.html';



        }catch(error){

            alert('Error processing payment');

            console.log(error);

        }

    });

};