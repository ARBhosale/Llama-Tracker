export default ({properties: { llama }}) => <table>
    <thead>
        <tr>
            <td>Weight</td>
            <td>Fur Length</td>
            <td>Fur Color</td>
            <td>Cleanliness</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{llama.weight} lbs.</td>
            <td>{llama.fur_length} in.</td>
            <td>{llama.fur_color}</td>
            <td>{llama.cleanliness}%</td>
        </tr>
        <tr className="subhead">
            <td colspan="2">Last Cleaned</td>
            <td colspan="2">Last Fed</td>
        </tr>
        <tr>
            <td colspan="2">{llama.lastCleaned}</td>
            <td colspan="2">{llama.lastFed}</td>
        </tr>
    </tbody>
</table>