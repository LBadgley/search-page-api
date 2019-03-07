export function makeCharacterTemplate(character) {
    const html = /*html*/ `
        <li>
            <p>${character.name}</p>
            <img src="${character.image}">
            <div>
                <p>Status: <span>${character.status}</span></p>
                <p>Species: <span>${character.species}</span></p>
            </div>
        </li>
        `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
const characterContainer = document.getElementById('character-container');

export default function loadCharacterContainer(characters) {
    characters.forEach(character => {
        const dom = makeCharacterTemplate(character);
        characterContainer.appendChild(dom);
    });
}