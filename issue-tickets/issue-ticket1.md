# PROJECT ISSUE TICKET



## Unexpected Behavior

> Products deleting automatically when I click on them, only when signed in. Delete button is conditionally rendered based on whether or not user is signed in so if I comment out the delete button it does not happen, and if I am not signed in it does not happen.

## Expected Behavior

> 

## Reproduce the Error

```md
1. Clone this repo.
2. Run `npm start`.
3. Navigate to '/products'
4. Click on a product
```

## Documentation

```md
DELETE http://localhost:3000/products/2 404 (Not Found)

createError.js:16 Uncaught (in promise) Error: Request failed with status code 404
    at createError (createError.js:16)
    at settle (settle.js:17)
    at XMLHttpRequest.onloadend (xhr.js:66)
```

## Attempted Resolution

```md
1. https://reactjs.org/docs/handling-events.html
```