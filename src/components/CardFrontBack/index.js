import CardGame from '../CardGame'
import './style.css'

function CardFrontBack(icon, altIcon) {
	window.cardFrontBack = {}

	window.cardFrontBack.handleClick = (event) => {
		const $cardFrontBack = event.target.closest('.card-front-back')
		$cardFrontBack.classList.toggle('-active')
	}

	return /*html*/ `
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
      
      <div class="card -front">
        ${CardGame()}
      </div>

      <div class="card -back">
        ${CardGame(icon, altIcon)}
      </div>

    </article>
  `
}

export default CardFrontBack
