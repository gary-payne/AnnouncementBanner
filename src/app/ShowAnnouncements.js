import $pnp from "sp-pnp-js";

export default class ShowAnnouncements {
    
    constructor() {
    }

    getAndDisplay() {

        function deriveClass(announcementLevel) {
            if (announcementLevel.indexOf("Low") > -1) { return "bannerAnnouncementLow"; }
            else if (announcementLevel.indexOf("Medium") > -1) { return "bannerAnnouncementMedium"; }
            else if (announcementLevel.indexOf("High") > -1) { return "bannerAnnouncementHigh"; }
            return "";
        }
        function deriveIcon(announcementLevel) {
            let iconName = "";
            if (announcementLevel.indexOf("Low") > -1) { iconName = "ms-Icon--star"; }
            else if (announcementLevel.indexOf("Medium") > -1) { iconName = "ms-Icon--infoCircle"; }
            else if (announcementLevel.indexOf("High") > -1) { iconName = "ms-Icon--alert"; }
            return "<i class=\"ms-Icon " + iconName + "\" aria-hidden=\"true\"></i>";
        }

        //Get the data from the announcement list
        $pnp.sp.web.lists.getByTitle("Announcements").items.select(["Title","AnnouncementLevel","Body"]).orderBy("AnnouncementLevel", true).get().then(function(data) {
            if (data && data.length > 0){
                console.log(JSON.stringify(data));
                let announcementsHtml = data.map((item) => {
                    let icon = deriveIcon(item.AnnouncementLevel);
                    return `<li class="${deriveClass(item.AnnouncementLevel)}">${icon}<div class="announcementBannerTitle">${item.Title}</div><div class="announcementBannerBody">${item.Body}</div></li>`
                });
                document.getElementById("customContent").innerHTML = "<ul>" + [...announcementsHtml].join("") + "</ul>"; 
            }
        });

    }

}