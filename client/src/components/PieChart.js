import React from 'react';

import {RadialChart} from 'react-vis';

export default class SimpleRadialChart extends React.Component {

    render() {
        return (
            <RadialChart
                colorType={'literal'}
                colorDomain={[0, 100]}
                colorRange={[0, 10]}
                margin={{top: 100, bottom: 100}}
                getLabel={d => d.name}
                data={[
                    {angle: this.props.angles.gstFive, color: '#89DAC1', name: '5%', opacity: 0.2},
                    {angle: this.props.angles.gstTwelve, color: '#F6D18A', name: '12%'},
                    {angle: this.props.angles.gstEighteen, color: '#1E96BE', name: '18%'},
                    {angle: this.props.angles.gstTwentyeight, color: '#DA70BF', name: '28%'},
                ]}
                labelsRadiusMultiplier={1.1}
                labelsStyle={{fontSize: 16, fill: '#222'}}
                showLabels
                style={{stroke: '#fff', strokeWidth: 2}}
                width={400}
                height={300} />
        );
    }
}
