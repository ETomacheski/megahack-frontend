import React from 'react'
import './styles.css'

import image from '../../img/lolla.jpg'

const SelectedItem = () =>{
  return(
  <>  
    <section class="produtos container">
      <div className="produtos-container">
          <ul class="produtos_lista">
            <li class="grid-8">
              <div class="produtos_icone">
                <img src={image} alt="Bikcraft Passeio" />
              </div>
            </li>

            <li class="grid-8">
              <h1>Ingresso Lollapalooza</h1>
              <h2>R$200,00</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <h6>Quantidade:</h6>
              <select className="select-quantidade">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="btn-selected-item-out">
                <button type="submit" name="Submit" class="btn-primary btn-selected-item">Comprar</button>
              </div>
            </li>

          </ul> 
        <div class="call">
         
        </div>
      </div>  
    </section>
  </>
  )
}

export default SelectedItem