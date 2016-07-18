### 0.3.5
> 7/17/2016

- **Bug Fix:** Menu in the dashboard provides popover menu for sections with more than one route. At the moment this mainly affects the articles area. You can now choose to go directly to the editor.
- **Bug Fix:** Entering the dashboard settings area redirects to the setup screen if there are not any settings for the site. This may or may not stick around because building customizable components that take their data from the settings would make more sense to preload the data from defaults in the database.  
- **Bug Fix:** Creating an article with tags is now working.
- **Minor Bug:** At the moment tag names are saving as their current index in the array. This will be resolved shortly.
- **Bug Fix:**  Blog page now renders content from article posts. More to come with this later.
- **Feature:** There is some route restrictions put in place to restrict certain areas like the dashboard from unauthenticated / non-admin users. Hopefully expanding upon this permission system at a later date.
- **Feature:** Reset and Forgot password functionality has been built out and is working.


### 0.3.0
> 7/14/2016

- **Feature:** Created a DAO to allow for easier bootstrapping of models and their controller counterparts.
- **Maintenance:** The server and client-side are now more tightly coupled together.
- **Yeah:** More in the morning because its late...

### 0.2.0
> 7/03/2016  

[-] **Setup and Settings**  Added a setup within the dashboard for settings and site customization. This is the first step in the process of loading / preloading various customizations before sending them down to the browser. At the moment the setup *wizard* contains the basic info like Website name, URL, etc... Additionally, a database creation script was made and an admin user is created if the database is empty the first time Boldr runs.

[-] **We're using Express**

[-] **Redis** Redis is used for sessions as well as caching *caching is in the early stages*.
    - This will be perhaps an opt in / out deal. Using PG as the fallback

[-] **Article Editor** Is now pretty damn broken. Nearly has the issue resolved. However, tags are now storing as unique.

[-] **Media Manager** Connecting to AWS S3. Uploading functionality as well as file management is coming along.

### 0.1.0
> 6/5/2016  

0.1.0 is an appropriate title for the current state of Boldr. Lots has changed since the earlier versions, which to me,
feels like a worthy bump from Alpha 1 to Alpha 2. Dont be fooled into thinking this is **anywhere close** to being ready. There
is still mountains of work to do before this is considered beta.  

#### Notable changes and additions:

1. **RethinkDB was dropped for Postgres**  
  The choice was clear when work started on relations between data. RethinkDB is great and I use
it for various other projects, but relational databases do what they do so well.

2. **Redis**  
Redis via ioredis was added for session support and advanced caching.

3. **Articles**  
The ability to create articles with both tags and user relationships works

4. **Other areas**  
Work has started on the frontend for managing important aspects of websites powered by Boldr. This
includes such things as the page builder, site configuration, and the overall look and feel.
