/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_DfigUxVc.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://yourusername.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Personal portfolio website" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"><title>', "</title>", '</head> <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"> ', ' <script src="https://unpkg.com/aos@next/dist/aos.js"><\/script> <script>\n      AOS.init({\n        duration: 800,\n        once: true,\n      });\n    <\/script> </body> </html> '])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/gokul/Downloads/portfolio-q/project/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { href: "#home", text: "Home" },
    { href: "#projects", text: "Projects" },
    { href: "#skills", text: "Skills" },
    { href: "#contact", text: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"> <nav class="container mx-auto px-6 py-4"> <div class="flex items-center justify-between"> <a href="#" class="text-2xl font-bold text-primary">Portfolio</a> <!-- Desktop Menu --> <ul class="hidden md:flex space-x-8"> ${navItems.map(({ href, text }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"> ${text} </a> </li>`)} </ul> <!-- Mobile Menu Button --> <button id="menu-toggle" class="md:hidden text-gray-600 dark:text-gray-300 hover:text-primary" aria-label="Toggle Menu"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800"> <ul class="px-6 py-4 space-y-4"> ${navItems.map(({ href, text }) => renderTemplate`<li> <a${addAttribute(href, "href")} class="block text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"> ${text} </a> </li>`)} </ul> </div> </nav> </header> `;
}, "C:/Users/gokul/Downloads/portfolio-q/project/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    { href: "https://twitter.com/gokul2x", icon: "mdi:twitter", label: "Twitter" },
    { href: "https://github.com/gokulkrishna-k", icon: "mdi:github", label: "GitHub" },
    { href: "https://linkedin.com/in/gokulkrishna-k/", icon: "mdi:linkedin", label: "LinkedIn" },
    { href: "https://medium.com/@gokulkrishna-k", icon: "mdi:medium", label: "Medium" },
    { href: "https://instagram.com/gokul2x", icon: "mdi:instagram", label: "Instagram" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="home" class="min-h-screen flex items-center pt-16"> <div class="container mx-auto px-6"> <div class="max-w-3xl mx-auto text-center" data-aos="fade-up"> <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
Gokul Krishna K
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
Red Team Analyst specializing in web security and penetration testing. Currently pursuing M.Sc. in Cyber Forensics and Information Security at the University of Madras.
</p> <div class="flex justify-center space-x-4 mb-8"> ${socialLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"${addAttribute(label, "aria-label")}> <span class="sr-only">${label}</span> ${renderComponent($$result, "Icon", Icon, { "name": icon, "class": "w-6 h-6" })} </a>`)} </div> <div class="flex flex-col sm:flex-row justify-center gap-4"> <a href="#contact" class="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors transform hover:scale-105 duration-200" data-aos="fade-up" data-aos-delay="100">
Get in Touch
</a> <a href="#projects" class="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg transition-colors transform hover:scale-105 duration-200" data-aos="fade-up" data-aos-delay="200">
View Experience
</a> </div> </div> </div> </section>`;
}, "C:/Users/gokul/Downloads/portfolio-q/project/src/components/Hero.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const experiences = [
    {
      title: "Red Team Analyst",
      company: "Cybersec\u2122\uFE0F",
      location: "Gurugram",
      duration: "6 months",
      description: "Specialized in web security and penetration testing, conducting comprehensive vulnerability assessments and security documentation.",
      achievements: [
        "Conducted phishing and spoofing attacks to evaluate client defenses",
        "Performed web penetration testing including SQL injection and XSS",
        "Created detailed security documentation and remediation recommendations",
        "Participated in bug bounty programs to identify vulnerabilities"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800"> <div class="container mx-auto px-6"> <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-up">Professional Experience</h2> <div class="max-w-4xl mx-auto"> ${experiences.map((exp) => renderTemplate`<div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden mb-8" data-aos="fade-up"> <div class="p-6"> <div class="flex justify-between items-start mb-4"> <div> <h3 class="text-xl font-bold text-primary">${exp.title}</h3> <p class="text-gray-600 dark:text-gray-300">${exp.company} - ${exp.location}</p> </div> <span class="text-sm text-gray-500">${exp.duration}</span> </div> <p class="text-gray-600 dark:text-gray-300 mb-4">${exp.description}</p> <ul class="list-disc list-inside space-y-2"> ${exp.achievements.map((achievement) => renderTemplate`<li class="text-gray-600 dark:text-gray-300">${achievement}</li>`)} </ul> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/gokul/Downloads/portfolio-q/project/src/components/Projects.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    {
      category: "Security Testing",
      items: ["Web Penetration Testing", "Vulnerability Assessment", "Social Engineering", "Bug Hunting"]
    },
    {
      category: "Tools & Technologies",
      items: ["DLP Systems", "SQL Injection", "XSS Testing", "Security Documentation"]
    },
    {
      category: "Education",
      items: [
        "M.Sc. Cyber Forensics (Current)",
        "B.Sc. Information Security",
        "Digital Forensics"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="py-20"> <div class="container mx-auto px-6"> <h2 class="text-4xl font-bold text-center mb-12">Skills & Expertise</h2> <div class="grid md:grid-cols-3 gap-8"> ${skills.map((skill) => renderTemplate`<div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up"> <h3 class="text-xl font-bold mb-4 text-primary">${skill.category}</h3> <div class="flex flex-wrap gap-2"> ${skill.items.map((item) => renderTemplate`<span class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"> ${item} </span>`)} </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/gokul/Downloads/portfolio-q/project/src/components/Skills.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800"> <div class="container mx-auto px-6"> <h2 class="text-4xl font-bold text-center mb-12">Get in Touch</h2> <div class="max-w-2xl mx-auto"> <div class="text-center mb-8"> <p class="text-lg text-gray-600 dark:text-gray-300">
Feel free to reach out directly at:
<a href="mailto:gokulverse@gmail.com" class="text-primary hover:text-secondary underline">
gokulverse@gmail.com
</a> </p> </div> <form class="space-y-6" action="https://formspree.io/f/gokulverse@gmail.com" method="POST"> <div> <label for="name" class="block text-sm font-medium mb-2">Name</label> <input type="text" id="name" name="name" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary" required> </div> <div> <label for="email" class="block text-sm font-medium mb-2">Email</label> <input type="email" id="email" name="email" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary" required> </div> <div> <label for="message" class="block text-sm font-medium mb-2">Message</label> <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary" required></textarea> </div> <button type="submit" class="w-full bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors">
Send Message
</button> </form> </div> </div> </section>`;
}, "C:/Users/gokul/Downloads/portfolio-q/project/src/components/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [
    { href: "https://twitter.com/gokul2x", icon: "mdi:twitter", label: "Twitter" },
    { href: "https://github.com/gokulkrishna-k", icon: "mdi:github", label: "GitHub" },
    { href: "https://linkedin.com/in/gokulkrishna-k/", icon: "mdi:linkedin", label: "LinkedIn" },
    { href: "https://medium.com/@gokulkrishna-k", icon: "mdi:medium", label: "Medium" },
    { href: "https://instagram.com/gokul2x", icon: "mdi:instagram", label: "Instagram" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="py-8 bg-gray-50 dark:bg-gray-800"> <div class="container mx-auto px-6"> <div class="flex flex-col items-center"> <div class="flex space-x-4 mb-4"> ${socialLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"${addAttribute(label, "aria-label")}> <span class="sr-only">${label}</span> ${renderComponent($$result, "Icon", Icon, { "name": icon, "class": "w-5 h-5" })} </a>`)} </div> <div class="text-center text-gray-600 dark:text-gray-400"> <p class="text-sm mb-2">From Aruppukottai, passionate about cybersecurity and art films</p> <p class="text-sm">&copy; ${currentYear} Gokul Krishna K. All rights reserved.</p> </div> </div> </div> </footer>`;
}, "C:/Users/gokul/Downloads/portfolio-q/project/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your Name - Portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/gokul/Downloads/portfolio-q/project/src/pages/index.astro", void 0);

const $$file = "C:/Users/gokul/Downloads/portfolio-q/project/src/pages/index.astro";
const $$url = "/your-repo-name";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
