function renderDom(reactDom, customID)
{
    // const newEle = document.createElement(reactDom.type);
    // newEle.innerHTML = reactDom.child;
    // newEle.setAttribute('href', reactDom.props.href);
    // newEle.setAttribute('target',reactDom.props.target);
    // customID.appendChild(newEle); 

    const domElement = document.createElement(reactDom.type);
    domElement.innerHTML= reactDom.child;
    for (const prop in reactDom.props) {
         if(prop == 'children') continue;
         domElement.setAttribute(prop, reactDom.props[prop]);

}
    customID.appendChild(domElement);
}

const reactDom = {
    type:'a',
    props:{
        href:'https://www.blogspage.com',
        target:'_blank'
    },
    child:'Click here to visit the Blogspage'
}

const customID = document.getElementById('root');

renderDom(reactDom, customID);
