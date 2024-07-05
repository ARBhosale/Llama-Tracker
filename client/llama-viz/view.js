import '@servicenow/now-chart-timeseries'

export default ({ properties: { llama, dataSelection } }) => {
    const data = llama.growthLog.map(({date, ...rest}) => ({
        ...rest,
        timestamp: new Date(date).getTime()
    }))
    const isWeight = dataSelection === 'weight'
    const title = isWeight ? 'Llama Weight' : 'Llama Fur Length'
    const formatWeight = w => w + ' lbs.'
    const formatFurLength = l => l + ' in.'
    const registerFormatter = isWeight ? formatWeight : formatFurLength
    const options = {
        width: '400',
        height: '200',
        showTooltip: true,
        seriesData: data,
        seriesConfig: {
            [title]: { 
                x: 'timestamp', 
                y: dataSelection, 
                type: 'line',
                color: isWeight ? 'blue' : 'salmon'
            },
        },
        hideXGridlines: true,
        hideYGridlines: true,
        alignTicks: true,
        extents: {
            y: isWeight ? [200, 450] : [0, 12]
        },
        registerPosition: 'top',
        registerConfig: {
            yFormat: registerFormatter
        }
    }
    return (<now-chart-timeseries {...options} />)
}
