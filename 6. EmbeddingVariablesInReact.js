<html>
  <head>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      const name = "Saikumar";
      const className = "sayHello";
      const ele = <h1 className="sayHellow">Welcome!</h1>;
      const ele1 = <h1 className={className}>Hello {name}!</h1>;    <!-- using variables -->
      ReactDOM.render(ele1, document.getElementById("root"));
    </script>
</body>
</html>
