import '../llama-item/index.js'

export default ({properties: { llamas }}) => {
    const llamaElems = llamas.map(llama => <llama-item llama={llama} />);
    return llamaElems;
}