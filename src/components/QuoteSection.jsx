import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
function QuoteSection() {
  return <>
  <div className="section quote">
    <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/> Food is everything we are, it's an extension of nationalist feeling,ethnic feeling,your personal history,
    your province,your region, your tribe, your grandma. It's inseperable from those from the get-go</p>
    <p className="quote-author">- Anthony Bourdain</p>
  </div>
  </>
}

export default QuoteSection