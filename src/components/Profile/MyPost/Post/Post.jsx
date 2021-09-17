import s from './post.module.css';
import friend from '../../../../images/friend3.png';

const Post = (props) => {
    
	return ( 
		<div className = {s.content}>
            <img className = {s.img} src= {friend} alt="foto user"/>			
			<p className={s.text}>{props.message}</p>
			<p><span>like</span>{props.like}</p>
            
		</div>
	);
}

export default Post;