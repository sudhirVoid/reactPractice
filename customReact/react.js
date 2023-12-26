function renderer(reactElement, container){
    /* Phase 1
    const domElement = document.createElement(reactElement.tagType);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('href', reactElement.props.target);
    container.appendChild(domElement);

    */

    const domElement = document.createElement(reactElement.tagType);
    domElement.innerHTML = reactElement.children;

    for(const prop in reactElement.props){

        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
         
    }
    container.appendChild(domElement)
}
// this is how the object is maintained.
const reactElement = {
    tagType: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Visit Google'
    
}
// we fetch the root element.
const rootContainer = document.getElementById('root');
// then inject next element to the root element.
renderer(reactElement, rootContainer);
