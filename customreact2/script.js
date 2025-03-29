function createRender(reactObj, reactRoot)
{
   const element = document.createElement(reactObj.type);
          element.innerHTML = reactObj.children;

          for(prop in reactObj.props){
                if(prop ==="children") continue;
                element.setAttribute(prop, reactObj.props[prop])
          }
          reactRoot.appendChild(element);
}

const reactObj = {
    type: "a",
    props:{
        href:"https://www.blogspage.com",
        target:"_blank"
    },
    children: "Click me to go on Blogspage"
}

const reactRoot = document.getElementById("root");

createRender(reactObj, reactRoot);