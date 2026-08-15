(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const form = document.querySelector("#signup-form");
  const status = document.querySelector("#form-status");
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        nav.classList.remove("is-open");
      });
    });
  }

  const revealEls = document.querySelectorAll(
    ".about .section-inner, .signup .section-inner, .contact .section-inner"
  );

  revealEls.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.classList.remove("is-error");

      if (!form.checkValidity()) {
        status.classList.add("is-error");
        status.textContent = "Please complete the required fields.";
        form.reportValidity();
        return;
      }

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      status.textContent = `Thanks${name ? `, ${name}` : ""}. You’re on the waitlist — we’ll be in touch.`;
      form.reset();
    });
  }
})();
