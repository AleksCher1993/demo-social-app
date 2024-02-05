import React from "react";
import { connect } from "react-redux";
import FriendsItem from "./FriendsItem";

const FriendsItemContainer=(props)=>{
    return <FriendsItem/>
}

const mapStateToProps=(state)=>(
    {

    }
)

export default connect(mapStateToProps,{})(FriendsItemContainer)