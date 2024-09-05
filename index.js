function TextRing(text) {
    const CHARS = text.split('');
    const INNER_ANGLE = 360 / CHARS.length;

    const container = document.createElement('span');
    container.className = 'text-ring';

    // Calcula o raio para o posicionamento dos caracteres
    const radius = 1 / Math.sin(INNER_ANGLE / (180 / Math.PI));
    container.style.setProperty('--total', CHARS.length);
    container.style.setProperty('--radius', radius);

    CHARS.forEach((char, index) => {
        const charSpan = document.createElement('span');
        charSpan.style.setProperty('--index', index);
        charSpan.textContent = char;
        container.appendChild(charSpan);
    });

    return container;
}

