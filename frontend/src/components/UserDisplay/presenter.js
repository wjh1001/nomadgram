import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const UserDisplay = (props, context) => (
    <div className={props.horizontal ? styles.horizontal : styles.vertical}>
        <div className={styles.column}>
            <img
                src={props.user.profile_image || require("images/noPhoto.jpg")}
                alt={props.user.username}
                className={props.big ? styles.bigAvatar | styles.avatar}
            />
            <div className={styles.user}>
                <span className={styles.username}>{props.user.username}
                </span>
                <span className={styles.name}>{props.user.name}
                </span>
            </div>
        </div>
        <span className={styles.column} >
            <button className={styles.button} onClick={props.handelClick}> {props.user.following ? context.t("Unfollow") : context.t("Follow")} </button>
        </span>
    </div>

);

UserDisplay.propTypes ={
    t.PropTypes.func,
}



export default UserDisplay;