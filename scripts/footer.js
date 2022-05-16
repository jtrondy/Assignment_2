const template = document.createElement('template'); // declaring template element

// adding content to template
template.innerHTML = `
    
    <footer class="index_footer">
        <p>
            COPYRIGHT © 32-BIT REPAIR // <a href="#">COPYRIGHT & DISCLAIMER</a> // <a href="#">PRIVACY POLICY</a> // <a href="../pages/contactUs.html">CONTACT US</a>
        </p>
    </footer>
`;

document.body.appendChild(template.content);
// appends to end of body element