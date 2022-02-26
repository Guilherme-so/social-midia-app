import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoComentsForm from './PhotoComentsForm'
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const commentSection = React.useRef(null)
  const { login } = React.useContext(UserContext)

  React.useEffect(() => {
    commentSection.current.scrollTop = commentSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <ul ref={commentSection} className={styles.comments}>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          )
        })}
      </ul>
      {login && <PhotoComentsForm id={props.id} setComments={setComments} />}
    </>
  )
}

export default PhotoComments
