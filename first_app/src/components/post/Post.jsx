import { DeleteOutlined } from '@ant-design/icons'; // { DeleteFilled }
import PropTypes from 'prop-types';

export default function Post({
  title, body, deletePost, index,
}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <DeleteOutlined onClick={() => deletePost(index)} />
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  deletePost: PropTypes.func,
  index: PropTypes.number,
};
