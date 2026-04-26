# Modal Window

A lightweight, vanilla JavaScript modal window component with a clean UI and smooth interactions.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Demo

Three buttons trigger the same modal window, which can be dismissed in multiple ways.

## Features

- Open a modal from multiple trigger buttons
- Close via the **✕** button, clicking the overlay, or pressing **Escape**
- Blurred backdrop overlay for focus effect
- No dependencies — pure HTML, CSS, and JavaScript

## Project Structure

```
├── index.html    # Markup and modal structure
├── style.css     # Styling and layout
├── script.js     # Modal open/close logic
└── .prettierrc   # Code formatter config
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/modal-window.git
   cd modal-window
   ```

2. **Open in browser**
   ```bash
   open index.html
   ```
   Or just double-click `index.html` — no build step or server required.

## Usage

Click any of the **Show Modal** buttons to open the modal. To close it:

| Action | Result |
|---|---|
| Click **✕** button | Closes modal |
| Click the overlay | Closes modal |
| Press `Escape` | Closes modal |

## How It Works

The modal and overlay start with a `hidden` class (`display: none`). JavaScript toggles this class on open/close events:

```js
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
```

The `Escape` key listener checks whether the modal is currently visible before closing:

```js
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
```

## License

This project is open source and available under the [MIT License](LICENSE).
