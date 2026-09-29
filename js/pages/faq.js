import '../reusable-components/header.js';

const faqs = [
    {
        category:"Shipping",
        question: "How long does shipping take?",
        answer: "Orders are prepared withing two or three working days and entrusted to courier shortly after. You will be notified at each stage, as is only proper."
    },

    {
        category:"Shipping",
        question: "Is shipping free?",
        answer: "We offer complimentary shipping on qualifying orders. Any applicable shipping fees will be displayed during checkout before you complete your purchase."
    },

    {
        category:"Payments",
        question: "What payment methods do you accept?",
        answer: "We accept the usual instruments of modern commerce — major cards and select digital wallets. We keep no record of your card details, only of your good taste."
    },

    {
        category:"Payments",
        question: "When will my payment be charged?",
        answer: "Your payment is authorized and processed once your order is confirmed. You'll receive an email confirmation as soon as your purchase is successfully placed."
    },

    {
        category:"Payments",
        question: "Why was my payment declined?",
        answer: "Payments may be declined due to insufficient funds, incorrect billing details, or restrictions from your card provider. If the issue persists, please contact your bank or try another payment method."
    },

    {
        category:"Returns",
        question: "What is your return policy?",
        answer: "A garment may be returned within fourteen days of arrival, provided it is unworn and bears its tags as it left us. We do not accept returns on items altered, soiled, or otherwise lived in."
    },

    {
        category:"Exchanges",
        question: "Can i exchange an item?",
        answer: "Should a size disappoint, write to us and we will arrange an exchange, stock permitting."
    },

    {
        category:"International orders",
        question: "Can i order from outside the country?",
        answer: "We ship to most countries with working postal systems and a fondness for good clothing. Duties and import charges, where applicable, are the responsibility of the recipient and are not included in the listed price."
    },

    {
        category:"Care",
        question: "How should i care for my Zyren pieces?",
        answer: "Each piece is accompanied by care instructions specific to its fabric."
    },

    {
        category:"Care",
        question: "Do you recommend dry cleaning?",
        answer: "Some garments are best maintained through professional dry cleaning. Please refer to the care label on your item for the recommended cleaning method."
    },
]

const faqContainer = document.querySelector('.faq__accordion');

addFaqListener();

function renderFaq(faqs) {
    let html = "";

    faqs.forEach(faq => {
        html += `
        <div class="faq__accordion-item" aria-expanded="false">
                <button class="faq__clickable-header">${faq.question}</button>
                <p class="faq__content" hidden>
                   ${faq.answer}
                </p>
        </div>
        `
    })

    faqContainer.innerHTML = html;
    addFaqListener();
}

renderFaq(faqs);


function filterCategories(categoryName) {
   return faqs.filter(eachFaq => eachFaq.category === categoryName);
}


const shippingArray = filterCategories("Shipping");
const paymentArray = filterCategories("Payments");
const returnArray = filterCategories("Returns");
const exchangesArray = filterCategories("Exchanges");
const intOrdersArray = filterCategories("International orders");
const careArray = filterCategories("Care");



const faqBtns = document.querySelectorAll('.faq__btn');

faqBtns.forEach(faqButton => {
    faqButton.addEventListener("click", () => {
        faqBtns.forEach(Button => {
            Button.classList.remove('active');
        })

        faqButton.classList.add('active');

        const category = faqButton.dataset.faq;

        if(category === "All Questions") {
            renderFaq(faqs);
            return;
        }

        renderFaq(filterCategories(category));
    })
})

function addFaqListener() {
    const clickableHeader = document.querySelectorAll(".faq__clickable-header");

    clickableHeader.forEach(header => {
        header.addEventListener("click", () => {
            const faqContent = header.closest(".faq__accordion-item")
                            .querySelector(".faq__content");

            const accordionItem = header.closest(".faq__accordion-item"); 

            let accordionAttr = accordionItem.getAttribute("aria-expanded");

            if(accordionAttr === "true") {
                hideContent(faqContent);

                header.closest(".faq__accordion-item")
                .setAttribute("aria-expanded", "false");

                return;
            }
            
            clickableHeader.forEach(notClicked => {
                if(header === notClicked) {
                    return;
                }

                const faqContent = notClicked.closest(".faq__accordion-item")
                                .querySelector(".faq__content");
                
                notClicked.closest(".faq__accordion-item")
                .setAttribute("aria-expanded", "false");                   

                hideContent(faqContent);
            })


            faqContent.hidden = false;
            accordionItem.setAttribute("aria-expanded", "true");

            faqContent.style.height = `${faqContent.scrollHeight}px`;

        })
    })



    function hideContent(faqContent) {
        faqContent.hidden = true;
        faqContent.style.height = null;
    }
}

