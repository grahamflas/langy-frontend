import React from 'react'
import Swal from 'sweetalert2'

class DrillChoice extends React.Component {

  handleClick = () => {
    let { correctAnswer, word } = this.props

    word === correctAnswer ? (
      Swal.fire({
        icon: "success",
        title: "Correct!",
        text: `${correctAnswer}`,
        showConfirmButton: false, 
        timer: 4000, 
        timerProgressBar: true, 
        showCloseButton: true,
        onClose: () => { this.props.closeModal() }
      })
    ) : (
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "try again",
        showConfirmButton: false, 
        timer: 4000,
        timerProgressBar: true, 
        showCloseButton: true
      })
    )
  }

  render() {
    let { word } = this.props
    return (
      <div className="ui card" onClick={this.handleClick}>
        {word}
      </div>
    )
  }
}

export default DrillChoice