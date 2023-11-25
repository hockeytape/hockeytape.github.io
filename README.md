# base

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install

# bun
bun install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev

# bun
pnpm run dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build

# bun
pnpm run build
```

### Lints and fixes files

```
# yarn
yarn lint

# npm
npm run lint

# pnpm
pnpm lint

# bun
pnpm run lint
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).


### Push to git hub pages

on main
git add .
git commit -m "message"
git push origin main

ready to build and deploy?

npm run build
git add dist -f 
git commit -m "deploy to gh-pages"
git subtree push --prefix dist origin gh-pages

make sure ot just push the dist


