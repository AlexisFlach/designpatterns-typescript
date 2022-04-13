#### Instructions

1
```
npm init -y
```
2
```
tsc --init
npm i -D typescript
```

3
```
npm i express
```

4
```
npm i -D @types/express @types/node nodemon ts-node ts-node-dev
```

5
```
 "scripts": {
    "start": "ts-node src/index.ts",
    "dev": "nodemon --exec ts-node src/index.ts",
    "dev:ts": "ts-node-dev --respawn src/index.ts",
    "build": "tsc"
  },
  ```