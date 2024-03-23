const modsWithCustomSettings = ['AutoClicker', 'Reach', 'Speed', 'Fly'];

const clickgui = document.createElement('div');
clickgui.classList.add('clickgui');
document.body.appendChild(clickgui);

const categories = {
    'Combat': ['AutoClicker', 'Reach'],
    'Movement': ['Speed', 'Fly']
};

for (const category in categories) {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');

    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category;
    categoryDiv.appendChild(categoryTitle);

    const optionsList = document.createElement('ul');

    categories[category].forEach(option => {
        const optionItem = document.createElement('li');
        optionItem.classList.add('menu-item');

        if (modsWithCustomSettings.includes(option)) {
            const modButton = document.createElement('button');
            modButton.textContent = option;
            modButton.classList.add('mod-button');

            const dropdownButton = document.createElement('button');
            dropdownButton.textContent = '▼';
            dropdownButton.classList.add('dropdown-button');

            dropdownButton.addEventListener('click', () => {
                const reachSetting = optionItem.querySelector('.reach-setting');
                if (reachSetting.style.display === 'none') {
                    reachSetting.style.display = 'block';
                } else {
                    reachSetting.style.display = 'none';
                }
                dropdownButton.classList.toggle('flipped');
            });

            const settingsContainer = document.createElement('div');
            settingsContainer.classList.add('settings-container');

            if (option === 'Reach') {
                const reachSetting = document.createElement('div');
                reachSetting.classList.add('reach-setting');
                reachSetting.style.display = 'none';

                const reachLabel = document.createElement('label');
                reachLabel.textContent = 'Reach:';

                const sliderContainer = document.createElement('div');

                const reachSlider = document.createElement('input');
                reachSlider.type = 'range';
                reachSlider.min = 0;
                reachSlider.max = 10;
                reachSlider.step = 0.1;
                reachSlider.value = 3.0;

                const reachTextbox = document.createElement('input');
                reachTextbox.type = 'text';
                reachTextbox.value = 3.0;

                sliderContainer.appendChild(reachSlider);
                
                sliderContainer.appendChild(reachTextbox);

                reachSetting.appendChild(reachLabel);
                reachSetting.appendChild(sliderContainer);

                settingsContainer.appendChild(reachSetting);
            }

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('button-container');
            buttonContainer.appendChild(modButton);
            buttonContainer.appendChild(dropdownButton);

            modButton.addEventListener('click', () => {
                optionItem.classList.toggle('toggled');
            });

            optionItem.appendChild(buttonContainer);
            optionItem.appendChild(settingsContainer);
        }

        optionsList.appendChild(optionItem);
    });

    categoryDiv.appendChild(optionsList);
    clickgui.appendChild(categoryDiv);
}

const style = document.createElement('style');
style.textContent = `
    .clickgui {
        background-color: #1e1e1e;
        color: #bfbfbf;
        padding: 10px;
        border: 2px solid #333;
        border-radius: 5px;
        width: 200px;
        margin: 20px;
    }

    .category h2 {
        font-size: 16px;
        margin-bottom: 5px;
        color: #ff5555; /* Lunar Client red */
    }

    ul {
        list-style-type: none;
        padding-left: 0;
    }

    .menu-item, .mod-button, .dropdown-button, .button-container {
        cursor: pointer;
        background-color: transparent; /* Transparent background */
        border: none; /* Remove default button styling */
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 20px;
    }

    li:hover {
        background-color: #333;
    }

    .dropdown-button {
        border: 1px solid #fff; /* White border */
        cursor: pointer;
        font-family: Arial, sans-serif; /* Match desired font */
        font-size: 14px; /* Match desired font size */
        color: #fff;
    }

    .flipped {
        transform: rotate(180deg);
    }

    li.toggled {
    background-color: #007bff; /* Blue highlight color */
    color: #fff; /* Text color when highlighted */
    transition: background-color 0.5s ease; /* Add transition effect */
}

    .settings-container label {
      margin-right: 5px;
      color: #fff; /* Text color for labels */
      font-size: 16px; /* Font size for labels */
      display: inline-block; /* Ensure labels are on the same line */
      width: 60px; /* Adjust label width as needed */
      text-align: right; /* Align labels to the right */
   }

   input[type='range'] {
      width: 100px; /* Adjust slider width as needed */
      margin-right: 10px; /* Add spacing between elements */
   }

   input[type='text'] {
      width: 50px; /* Adjust text box width as needed */
   }
`;

document.head.appendChild(style);
