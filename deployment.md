# Deployment
## Steps
1. `sudo apt-get update`
2. `sudo apt-get install nodejs`
3. Check the installation by running `nodejs -v` and `npm -g`
4. Run `sudo npm install -g pm2`
5. Run `sudo npm install -g yarn`
6. Clone the repo

### Frontend
1. `touch .env.local` and paste in the contents as below. Same for `.env.production.local`
```
## .env.local and .env.production.local
NEXT_PUBLIC_BACKEND_URL=http://54.151.227.180:5000
NEXT_PUBLIC_TESTING_BACKEND_URL=http://vulpix-real-backend.theminerdev.com
```
2. `yarn install --frozen-lockfile`
3.  `yarn build`
4. `pm2 start yarn --name "nextjs" -- start`
5. A server will start on port 3000. You can change this in package.json in the start script