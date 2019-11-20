var script = document.createElement('script');
script.onload = function () {
    fbInboxFillPage('https://www.facebook.com/Hanoi.electronic.components/','https://onapp.haravan.com/facebookinbox/static/images/fb-icon-4.png','#3366CC','#797979','#FFFFFF','0','Liên hệ với chúng tôi!',false,true),facebookShowPanelButton();
};
script.src = "https://onapp.haravan.com/facebookinbox/static/javascripts/fb-box.js?v=1564041375686";
document.getElementsByTagName('head')[0].appendChild(script);