
import '../../../utlis/styles/Card.css'

function Cart({ description, imageUrl , title ,_id }) {
	return (
		<li  key={_id}  className='lmj-card-item'>
			<img className='lmj-card-item-cover' src={imageUrl} alt={`${title} cover`} />
			<h5>{title}</h5>
			<div>
                <span>{description}</span> 
			</div>
		</li>
	)

}
export default Cart