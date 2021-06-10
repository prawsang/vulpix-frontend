This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.  
  
## Deploy on an Ubuntu instance  
Before starting, make sure to have port 3000 exposed. To see the current configuration, run `sudo ufw status`. If not enabled, run `sudo ufw allow 3000`.  
1. `sudo apt update`
2. `sudo apt install nodejs`
3. Check the installation by running `nodejs -v` and `npm -v`
4. Run `sudo npm install -g pm2`
5. Run `sudo npm install -g yarn`
6. Check the installation of yarn by running `yarn --version`
7. `touch .env.local` and paste in the contents as below. Same for `.env.production.local`
```
## .env.local and .env.production.local
NEXT_PUBLIC_BACKEND_URL=YOUR_BACKEND_URL
NEXT_PUBLIC_TESTING_BACKEND_URL=http://vulpix-real-backend.theminerdev.com
```
8. Install dependencies by running `yarn install --frozen-lockfile`
9. Build the application `yarn build`. This can take a while.
10. Start the application in production by running `pm2 start yarn --name "nextjs" -- start`
11. A server will start on port 3000. You can change this in package.json in the start script and run steps 10 and 11 again.
12. (optional) In addtion, configure NGINX to setup a reverse-proxy server to pass requests from port 80 to port 3000. The NGINX configuration for the application is as below:
```
server {
    listen 80 default_server;
    server_name _;

    access_log /var/log/nginx/reverse-access.log;
    error_log /var/log/nginx/reverse-error.log;

    location / {
        # reverse proxy for next server
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        # we need to remove this 404 handling
        # because next's _next folder and own handling
        # try_files $uri $uri/ =404;
    }
}
```
For instructions on how to apply this configuration, see [How to Configure a Nginx HTTPs Reverse Proxy on Ubuntu Bionic - Scaleway](https://www.scaleway.com/en/docs/how-to-configure-nginx-reverse-proxy/).
