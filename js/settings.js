let settings;

window.onload = () => {
    settings = loadSettings() || {};
    if (settings.cloudsEnabled === undefined) {
        settings.cloudsEnabled = true;
    }
    toggleClouds(settings.cloudsEnabled);
};

function saveSettings(settings) {
    setCookie("user_settings", JSON.stringify(settings), 365);
}

function loadSettings() {
    return JSON.parse(getCookie('user_settings'));
}

function toggleClouds(toggle) {
    if (!toggle) {
        $('body').removeClass("disable-clouds hide-clouds");
        $('body').addClass("hide-clouds");
        setTimeout(disableClouds, 200);
        settings.cloudsEnabled = false;
    } else {
        $('body').removeClass("disable-clouds hide-clouds");
        settings.cloudsEnabled = true;
    }

    saveSettings(settings);

    function disableClouds() {
        $('body').addClass("disable-clouds");
        $('body').removeClass("hide-clouds");
    }
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}