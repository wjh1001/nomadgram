import React from "react";
import PropTypes from "proptypes";
import Loading from "component/Loading/";
import UserDisplay from "component/UserDisplay";
import PhotoDisplay from "component/PhotoDisplay";

const Search = (props, context) => {
    return (
        <div className={styles.search}>
            <div className={styles.section}>
                <h4 styles={styles.title}>
                    {context.t("Users")}
                </h4>
                {props.loading && <Loading />}
                {!props.loading && 
                  props.userList.length < 1 && (
                      <NotFound text={context.t("Nothing found :(")} />
                  )
                }
                <div className={styles.content}>
                {!props.loading &&
                  props.userList.length > 0 && (
                      <RenderUserSearch userList={props.userList} />
                  )}
                </div>
            </div>
            <div className={styles.section}>
                <h4 className={styles.title}>{context.t("Photos")}</h4>
                {props.loading && <Loading />}
                {!props.loading && 
                props.imageList.length < 1 && (
                    <NotFound text={context.t("Nothing found :(")} />
                )
                }
                <div className={styles.content}>
                {!props.loading &&
                props.userList.length > 1 && (
                    <RenderUserSearch userList={props.imageList} />
                )
                }
                </div>
            </div>    
        </div>
    );
};


const RenderUserSearch = props =>
    props.userList.map(user =>(
        <UserDisplay vertical={true} user={user} key={user.id}/>
    ));

const RenderImageSearch = props =>
    props.ImageList.map(photo => <PhotoDisplay photo={photo} key={photo.id} />);

const NotFound = props => <span className={styles.notFound}>{props.text}</span>;


Search.contextTypes={
    t: PropTypes.func.isRequired
};

Search.propTypes = {
    loading: PropTypes.bool.isRequired,
    imageList: PropTypes.array,
    userList: PropTypes.array
};

export default Search;