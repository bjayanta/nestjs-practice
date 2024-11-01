# Query String

### Topics: 

1. What is Query String
2. How to work with it?

### Query string

```js
// http://localhost:3000/users?gender=male&isMarried=false

// Example 1
@Get()
findAll(@Query() queryString: any) {
  console.log(queryString);
}
// Return
// { gender: 'male', isMarried: 'false' }

// Example 2
@Get()
findAll(@Query('gender') query: any) {
  console.log(query);
}
// Return 
// male
```

Thank you.