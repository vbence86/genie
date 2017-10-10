# Genie
Lightweight un-opinionated router implementation built on top of Express

### Usage 
#### Create your own service implementation
```javascript

const Service = {
  urlPattern: "/myService",

  type: "post",

  run: (req, res) => {
    return { response: "myService works!" };
  }
};

export default Service;
```
#### Install it as a middleware
```javascript
import myService from './service/MyService'; 

// ...

// app is an express instance 
installer(app)(myService);

// ...

app.listen( /* ... */ )
```

