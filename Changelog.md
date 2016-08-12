### 0.4.0
> 8/11/2016  

I've been going on and on about 0.4.0 coming soon, or in a few days. I couldnt bring myself to rush and push out something that is half-assed. I'm pleased to say that, 0.4 is quite an improvement over the previous releases.  

- **MAJOR:** The API and CMS are now located in different repositories under the [Boldr organization](https://github.com/boldr).
- **Feature:** The front-facing website header was rewritten and the dashboard has a much cleaner look.
- **Feature:** The article editor got some much needed TLC, and now provides more rich text editing capabilities. In addition it now outputs
as well as stores raw html in the database.
- **Feature:** Seed files for the initial database population were added.

### 0.3.11
> 8/02/2016

This will be the final release of 0.3. Lots of progress has been made, but there are still a couple of things I'd like to resolve before tagging 0.4.

- **Feature:** Notifications are now a thing. Still being styled and added everywhere, but they exist and they work.
- **Bug Fix:** Tagging works flawlessly  [\#10](https://github.com/strues/boldr/issues/10)
- **Feature:** Single blog post page [implemented](https://github.com/strues/boldr/commit/91d99e80467dd1fdeefa956db944e841f53558fe)
- **Feature:** Blog posts received some much needed love and have taken on their rightful card component.
- **Feature:** Article editor in dashboard allows for updating past posts.
- **Bug Fix:** Pretty much every implemented API endpoint is working / has been tested. Currently in the process of documentation and writing integration tests.
- **Feature:** Cookies got the boot for JSON Web Tokens.
- **Merged pull requests:**
  - Prep for 0.4.0 [\#68](https://github.com/strues/boldr/pull/68) ([strues](https://github.com/strues))
  - Update supertest to version 2.0.0 🚀 [\#67](https://github.com/strues/boldr/pull/67) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
  - Update eslint-loader to version 1.5.0 🚀 [\#66](https://github.com/strues/boldr/pull/66) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
  - Update webpack-hot-middleware to version 2.12.2 🚀 [\#65](https://github.com/strues/boldr/pull/65) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))
  - Update all dependencies 🌴 [\#63](https://github.com/strues/boldr/pull/63) ([greenkeeperio-bot](https://github.com/greenkeeperio-bot))  

### 0.3.8
> 7/25/2016

- **DX** Webpack 2 and all its glorious code splitting is set up.
- **DX** Code is organized in a way that is much more logical and should be easier for everyone to find things.
- **Bug Fix**  Article bodies implement the correct read only editor, providing rich blocks of styled content.
- **Breaking** Social login and verification emails have been temporarily removed from the active features. The code is   still there, but at this time there are bigger things for me to worry about.

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
