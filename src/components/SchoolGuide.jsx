import React from 'react';
import FloorLink from './molecules/FloorLink';

class SchoolGuide extends React.Component {
    render() {
        return (
            <div class="school-guide">
                <div class="floor-links">
                    <FloorLink numFloor='7' />
                    <FloorLink numFloor='6' />
                    <FloorLink numFloor='5' />
                    <FloorLink numFloor='4' />
                    <FloorLink numFloor='3' />
                    <FloorLink numFloor='2' />
                    <FloorLink numFloor='1' />
                </div>
            </div>
        );
    }
}

export default SchoolGuide;