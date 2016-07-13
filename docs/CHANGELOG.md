### Pre-Alpha 3
7/13/2016  

[-] **API Server**  The API server is now completely disconnected from the server-side rendering server. This is a huge benefit for developing because it's one less thing to compile.

[-] **Setup and Settings**  Added a setup within the dashboard for settings and site customization. This is the first step in the process of loading / preloading various customizations before sending them down to the browser. At the moment the setup *wizard* contains the basic info like Website name, URL, etc... Additionally, a database creation script was made and an admin user is created if the database is empty the first time Boldr runs.

[-] **We're using Express**

[-] **Redis** Redis is used for sessions as well as caching *caching is in the early stages*.
    - This will be perhaps an opt in / out deal. Using PG as the fallback

[-] **Article Editor** Is now pretty damn broken. Nearly has the issue resolved. However, tags are now storing as unique.

[-] **Media Manager** Connecting to AWS S3. Uploading functionality as well as file management is coming along.

### Pre-Alpha 2.1
6/5/2016  

**Alpha 2** is an appropriate title for the current state of Boldr. Lots has changed since the earlier versions, which to me,
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
