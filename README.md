1. Checkout `scratch/k24-demo-latest-fixes` on fluent and run `npm run ci`
2. Update symlink paths in `package.json` to wherever you have fluent setup
3. Run `npm run sync`

Error
```
[now-sdk] [ERROR] Transform failed:
[now-sdk] [ERROR] ZodError: [
  {
    "code": "invalid_union",
    "unionErrors": [
      {
        "issues": [
          {
            "code": "invalid_type",
            "expected": "number",
            "received": "string",
            "path": [
              "caller_access",
              "#text"
            ],
            "message": "Expected number, received string"
          }
        ],
        "name": "ZodError"
      },
      {
        "issues": [
          {
            "code": "invalid_type",
            "expected": "number",
            "received": "object",
            "path": [
              "caller_access"
            ],
            "message": "Expected number, received object"
          }
        ],
        "name": "ZodError"
      }
    ],
    "path": [
      "caller_access"
    ],
    "message": "Invalid input"
  }
]
    at Object.get error [as error] (/Users/richard.bull/git/fluent/node_modules/zod/lib/types.js:43:31)
    at ZodObject.parse (/Users/richard.bull/git/fluent/node_modules/zod/lib/types.js:143:22)
    at Object.xml (/Users/richard.bull/git/fluent/packages/cli-core/dist/build/plugins/db/TablePlugin.js:346:63)
    at Object.composeXml (/Users/richard.bull/git/fluent/packages/cli-core/dist/build/Context.js:89:140)
    at transform (/Users/richard.bull/git/fluent/packages/cli-core/dist/build/Build.js:88:34)
    at /Users/richard.bull/git/fluent/packages/cli-core/dist/build/Build.js:166:26
    at Generator.next (<anonymous>)
    at /Users/richard.bull/git/fluent/packages/cli-core/dist/build/Build.js:31:71
    at new Promise (<anonymous>)
    at __awaiter (/Users/richard.bull/git/fluent/packages/cli-core/dist/build/Build.js:27:12)
    ```