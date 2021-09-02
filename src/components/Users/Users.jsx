import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./users.module.css";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    return <div>
        <div>
            <span className={styles.totalPages}>Total pages: {pagesCount}</span>
        </div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     key={u.id}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                    />
                )
            }
        </div>
    </div>
}

export default Users;
