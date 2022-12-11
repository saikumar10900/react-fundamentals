<html>
  <head>
    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">    <!--we have to use script type 'module' to render React elements-->
      const eleProps = { className: "welcome", children: "Welcome to React Fundamentals!" };
      const eleType = "h1";
      const element = React.createElement(eleType, eleProps);
    </script>
  </body>
</html>
