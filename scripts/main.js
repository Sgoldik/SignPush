const animations = [
    '#description_title', '#description_text', '#description_preview__pen', '#description_preview__loop', '#description_preview__shield',
    '#description_preview__pc', '#benefits_item__preview_image-left__pc', '#benefits_item__preview_image-left__pc_number', '#benefits_item__preview_image-right__clock',
    '#benefits_item__preview_image-right__clock_number', "#benefits_item__preview_image-left__safe",
    '#benefits_item__preview_image-left__safe_number', '#benefits_item__description_title_1', '#benefits_item__description_text_1',
    '#benefits_item__description_title_2', '#benefits_item__description_text_2', '#benefits_item__description_title_3', '#benefits_item__description_text_3',
    '.usage_button__image', '#demo_item__arrow_left', '#demo_item__image_text', '#integration_preview__android',
    '#integration_preview__1c', '#integration_preview__wheel', '#integration_preview__bitrix', '#integration_preview__n', '#integration_preview__amocrm',
    '#integration_preview__api', '#integration_preview__megaplan', '#integration_preview__line1_container', '#integration_preview__line2_container',
    '#integration_preview__line3_container', '#integration_preview__line4_container', '#integration_preview__line5_container',
    '#integration_preview__line6_container', '#integration_preview__line7_container', '#integration_preview__line8_container',
    '#howto_step__num_1', '#howto_step__num_2', '#howto_step__num_3', '#howto_step__num_4', '#howto_step__num_5',
    '#howto_step__num_6', '#howto_step__text_1', '#howto_step__text_2', '#howto_step__text_3', '#howto_step__text_4',
    '#howto_step__text_5', '#howto_step__text_6','#howto_step__play_market', '#trial_item__preview_image'
];

window.addEventListener("DOMContentLoaded", function() {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target
                
                //lazyImage.classList.toggle('is-paused')
                console.log("lazy loading ", lazyImage)
                lazyImage.classList.remove("is-paused");
                imgObserver.unobserve(lazyImage);
                //lazyImage.src = lazyImage.dataset.src
            }
        })
    });
    animations.forEach(animation => {
        const el = document.querySelector(animation)
        imageObserver.observe(el);
        
    })
    
})
