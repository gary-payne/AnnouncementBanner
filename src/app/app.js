import ShowAnnouncements from "./ShowAnnouncements"

window.onload = () => {
    const announcements = new ShowAnnouncements();
    announcements.getAndDisplay("Announcements");
};
