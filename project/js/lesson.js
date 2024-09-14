//PHONE BLOCK

const phoneInput = document.querySelector ('#phone_input')
const phoneButton = document.querySelector ('#phone_button')
const phoneSpan = document.querySelector ('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/ 

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = "OK"
        phoneSpan.style.color = "green"
    }else {
        phoneSpan.innerHTML = "NOT OK"
        phoneSpan.style.color = "red"
    }

}

//TAB SLIDER
const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabContentItems = document.querySelectorAll('.tab_content_item');
const tabContentItemsParent = document.querySelector('.tab_content_items');

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none';
    });
    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active');
    });
};
let currentIndex = 0;
const showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = 'block';
    tabContentItems[id].classList.add('tab_content_item_active');
};
const autoSwitchTabs = () => {
    hideTabContent();
    currentIndex = (currentIndex + 1) % tabContentBlocks.length; // Переход к следующему табу
    showTabContent(currentIndex);
};

hideTabContent();
showTabContent();

tabContentItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) { // Fixed typo here
        tabContentItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent();
                showTabContent(index);
                currentIndex = index;
            }
        });
    }
};
const interval = 3000;
setInterval(autoSwitchTabs, interval);