# Memory Leak

## Observation

```bash
yarn install --pure-lockfile
yarn start
```

then open [chrome://inspect](chrome://inspect) to inspect the memory heap snapshot or timeline.

## Fix

Update line 7 in `index.js` to

```js
.then(() => { tap(); });
```
