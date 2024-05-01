import '../llama-table/index.js'
import '../llama-viz/index.js'

export default ({properties: { llama }}) => {
    return (
        <div className="llama-item">
            <div className="llama-item-title">
                <div className="llama-picture"><img src="/x_snc_llamatracker.llama-icon.png" /></div>
                <h2 className="llama-title">{llama.name}</h2>
            </div>
            <div className="llama-vital-graph">
                <llama-viz llama={llama} data-selection="weight" />
            </div>
            <div className="llama-vital-graph">
                <llama-viz llama={llama} data-selection="furLength" />
            </div>
            <div className="llama-data">
                <llama-table llama={llama} />
            </div>
        </div>
    )
}