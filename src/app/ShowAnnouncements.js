import $pnp from "sp-pnp-js";
import moment from "moment";

export default class ShowAnnouncements {

    /*
     * Derive the class to apply to the nnotification LI wrapper
     */
    deriveClass(announcementLevel) {
        if (announcementLevel.indexOf("Low") > -1) { return "bannerAnnouncementLow"; }
        else if (announcementLevel.indexOf("Medium") > -1) { return "bannerAnnouncementMedium"; }
        else if (announcementLevel.indexOf("High") > -1) { return "bannerAnnouncementHigh"; }
        return "";
    }

    /*
     * Derive the icon to display for the nnotification
     */
    deriveIcon(announcementLevel) {
        let iconName = "";
        if (announcementLevel.indexOf("Low") > -1) { iconName = "ms-Icon--star"; }
        else if (announcementLevel.indexOf("Medium") > -1) { iconName = "ms-Icon--infoCircle"; }
        else if (announcementLevel.indexOf("High") > -1) { iconName = "ms-Icon--alert"; }
        return "<i class=\"ms-Icon " + iconName + "\" aria-hidden=\"true\"></i>";
    }
	
    /*
     * Helper to log informaiton to the console safely
     */
    logToConsole(msg) {
		if (window.console) {
			try { console.log(msg); }
			catch(e) { }
		}
    }

    /*
     * Get and display the current announcements.
     * Assumes that the 
     */
    getAndDisplay(listDisplayName) {
        try {
            //Note - this is a fix for NZ timezone!!
            const currentDay = moment().subtract(18, "h"), isodate = currentDay.toISOString();
            $pnp.sp.web.lists.getByTitle(listDisplayName).items.select(["Title","AnnouncementLevel","Body"]).filter("Expires ge datetime'" + isodate + "'").orderBy("AnnouncementLevel", true).get().
                then((data) => {
                    if (data && data.length > 0){
                        console.log(JSON.stringify(data));
                        let announcementsHtml = data.map((item) => {
                            const className = this.deriveClass(item.AnnouncementLevel),
                                icon = this.deriveIcon(item.AnnouncementLevel);
                            return `<li class="${className}">${icon}<div class="announcementBannerTitle">${item.Title}</div><div class="announcementBannerBody">${item.Body}</div></li>`
                        });
                        document.getElementById("customContent").innerHTML = "<ul>" + [...announcementsHtml].join("") + "</ul>"; 
                    }
                })
                .catch((error) => {
                    this.logToConsole(`1 - Error attempting to get list items from '${listDisplayName}': ${error.message}`);
                });
        } catch (e) {
            $pnp.sp.web.lists.getByTitle(listDisplayName).get()
                .then((list) => {
                    this.logToConsole(`2 - Error getting items from list '${list.Title}': ${e.message}`);
                })
                .catch((error) => {
                    this.logToConsole(`3 - Could not find list named '${listDisplayName}': ${error.message}`);
                });
        } 
    }

}