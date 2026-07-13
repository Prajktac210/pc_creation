/* =========================================
   PC CREATION - script.js
========================================= */

document.body.style.overflow = "hidden";

/* ---------- PAGE LOADER ---------- */

window.addEventListener("load", () => {

    console.log("PC CREATION Website Loaded Successfully");

    const loader = document.getElementById("pageloader");

    setTimeout(() => {

        if (loader) {

            loader.classList.add("fade-out");

            setTimeout(() => {

                loader.remove();

                document.body.style.overflow = "auto";

            }, 500);

        }

        showToast("Welcome to PC CREATION 🚀");

    }, 3000);   // Loader stays for 3 seconds

});


/* ---------- TOAST ---------- */

function showToast(message) {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.querySelector(".toast-msg").textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


/* ---------- PROGRESS BAR ---------- */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const progress =
        (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    progressBar.style.width = progress + "%";

}, { passive: true });


/* ---------- NAVBAR ---------- */

const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {

    if (nav) {

        nav.classList.toggle("scrolled", window.scrollY > 40);

    }

}, { passive: true });


/* ---------- SCROLL REVEAL ---------- */

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".reveal").forEach(el => {

    revealObserver.observe(el);

});


/* ---------- COUNTERS ---------- */

document.querySelectorAll(".num-counter").forEach(counter => {

    const target = Number(counter.dataset.target);

    let started = false;

    const counterObserver = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting && !started) {

            started = true;

            let count = 0;

            const timer = setInterval(() => {

                count += Math.ceil(target / 80);

                if (count >= target) {

                    count = target;

                    clearInterval(timer);

                }

                counter.textContent = count;

            }, 20);

            counterObserver.disconnect();

        }

    });

    counterObserver.observe(counter);

});


/* ---------- SMOOTH SCROLL ---------- */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ---------- WHATSAPP FORM ---------- */

function sendToWhatsapp(e) {

    e.preventDefault();

    const name = document.getElementById("f-name").value;

    const email = document.getElementById("f-email").value;

    const phone = document.getElementById("f-phone").value;

    const service = document.getElementById("f-service").value;

    const message = document.getElementById("f-msg").value;

    const text =
`New Website Inquiry

Name : ${name}
Email : ${email}
Phone : ${phone}
Service : ${service}

Message :
${message}`;

    const url =
        "https://wa.me/919175604825?text=" +
        encodeURIComponent(text);

    window.open(url, "_blank");

    document.getElementById("cform").reset();

    showToast("Opening WhatsApp...");
}