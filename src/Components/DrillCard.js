import React from 'react'
import { connect } from 'react-redux'

class DrillCard extends React.Component{
  constructor(){
    super()
    this.state={
      currentCard: 0, 
      answer: ""
    }
  }

  componentDidMount(){
    const { currentCard } = this.state

    this.setState( {
      answer: this.props.deckWords[currentCard].word_english
    } )
  }


  render(){
    const { deckWords } = this.props
    console.log( deckWords )
    return(
    <div>
        <div className="drill-card-container">
          <div className="drill-card">
            <div className="drill-card-front">
              <h1>{deckWords[this.state.currentCard].word_target_language}</h1>
            </div>
          </div>
        </div>
  
        <button onClick={} >Next Card</button>
    </div>
    )
  }

}

const mapStateToProps = state => ({
  deckWords: state.deckWords
})

export default  connect(mapStateToProps ) (DrillCard)