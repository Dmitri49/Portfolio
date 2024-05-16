const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = document.querySelectorAll('.tab_content');
const tabIndicator = document.querySelector('.tab_indicator')

function onClickTabs(item) {
    item.addEventListener('click', () => {
        if (!item.classList.contains('tab_active')) {
            tabs.forEach((item) => {item.classList.remove('tab_active')});
            item.classList.add('tab_active');
    
            let index = tabs.indexOf(item);
            
            tabContents.forEach((item) => {item.classList.remove('tab_content_active')});
            tabContents[index].classList.add('tab_content_active');

            tabIndicator.style.left = `calc(calc(100% / 5) * ${index}`;
        }
    })
}

tabs.forEach(onClickTabs);