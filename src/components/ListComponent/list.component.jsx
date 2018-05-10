import React from 'react';
import { connect } from 'react-redux';

const ListComponent = (props) => {

    const list = props.comments.map(item => <li key={item}>{item}</li>);
    console.log("props from list component: ", props);
    return(
        <ul className={"list-component-wrapper"}>
            {list}
        </ul>
    );
};

function mapStateToProps(state) {
    return { comments: state.comments };
}

export default connect(mapStateToProps)(ListComponent);
