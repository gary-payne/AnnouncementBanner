# AnnouncementBanner
Sample code for displaying announcements as notification banner on a SharePoint site

Project used ES6 and the PNP library to display list items from an announcement list as notification on a page in SharePoint (plus the Office UI Fabric for a little initial styling)

Note that the gulp "spupload" task expects the presence of a file named settings.json in the parent folder for this source folder. That file needs to contain the following:
{
   username: Name of the account to use to log in to Office 365
   password: password for that account
   siteUrl: Absolute URL to the site containing a siteassets library into which the files will be uploaded
}

The included HTML file in the dist folder should be set as the content source for a content editor web part - that CEWP will then display the notifications from the local announcements list
